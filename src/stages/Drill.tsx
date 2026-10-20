import { useEffect, useMemo, useRef, useState } from "react";
import type { Chunk, Day } from "../types";
import type { Progress } from "../lib/storage";
import { XP } from "../lib/xp";
import { buildDrills, clozeAnswer, type Drill as DrillItem } from "../lib/drills";
import { canListen, listen, speak, type Listener } from "../lib/speech";
import { gradeSpeech, similarity } from "../lib/similarity";
import { useXpPop } from "../components/ui";
import type { Update } from "../App";

const KIND_LABEL = { choice: "상황에 맞는 표현은?", cloze: "빈칸을 채우세요", speak: "한국어 → 영어로 말하기", reflex: "한국어 → 영어 즉답 (타이핑)" };

export default function Drill({ day, pool, progress, update, onDone }: { day: Day; pool: Chunk[]; progress: Progress; update: Update; onDone: (xp: number) => void }) {
  const drills = useMemo(() => buildDrills(day.chunks, pool, { speak: canListen() }), []); // eslint-disable-line react-hooks/exhaustive-deps
  const [i, setI] = useState(0);
  const [xp, setXp] = useState(0);
  const [combo, setCombo] = useState(0);
  const [best, setBest] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [typed, setTyped] = useState("");
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(null);
  const [heard, setHeard] = useState("");
  const [listening, setListening] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const lisRef = useRef<Listener | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { pop, node } = useXpPop();
  const s = progress.settings;
  const d = drills[i];
  const done = i >= drills.length;

  // reflex timer
  useEffect(() => {
    if (!d || (d.kind !== "reflex" && d.kind !== "speak") || result) return;
    setTimeLeft(d.seconds ?? 8);
    const t = setInterval(() => setTimeLeft((x) => (x <= 0.25 ? 0 : x - 0.25)), 250);
    return () => clearInterval(t);
  }, [i, result]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (d && (d.kind === "cloze" || d.kind === "reflex") && !result) inputRef.current?.focus();
  }, [i, result]); // eslint-disable-line react-hooks/exhaustive-deps

  const settle = (ok: boolean, msg: string) => {
    setResult({ ok, msg });
    update((p) => ({ ...p, stats: { ...p.stats, drillsAnswered: p.stats.drillsAnswered + 1, drillsCorrect: p.stats.drillsCorrect + (ok ? 1 : 0) } }));
    if (ok) {
      const c = combo + 1;
      setCombo(c);
      setBest(Math.max(best, c));
      setCorrect(correct + 1);
      const gained = XP.drillCorrect + (c >= 3 ? XP.drillStreakBonus * Math.min(5, c - 2) : 0);
      setXp(xp + gained);
      pop(gained);
      if (c >= 10) update((p) => (p.badges.includes("combo-10") ? p : { ...p, badges: [...p.badges, "combo-10"] }));
      if (s.autoSpeak) speak(d.chunk.phrase, { rate: s.voiceRate, voiceName: s.voiceName });
    } else {
      setCombo(0);
      speak(d.chunk.phrase, { rate: s.voiceRate, voiceName: s.voiceName });
    }
  };

  const next = () => {
    setPicked(null);
    setTyped("");
    setHeard("");
    setResult(null);
    setI(i + 1);
  };

  const checkTyped = () => {
    const target = d.kind === "cloze" ? clozeAnswer(d.chunk) : d.chunk.phrase;
    const sc = Math.max(similarity(typed, target), similarity(typed, d.chunk.phrase));
    settle(sc >= 0.8, sc >= 0.8 ? "정답!" : `정답: ${d.chunk.phrase}`);
  };

  const startListen = () => {
    if (listening) {
      lisRef.current?.stop();
      return;
    }
    setHeard("");
    setListening(true);
    lisRef.current = listen(
      (t) => setHeard(t),
      (t) => {
        setListening(false);
        setHeard(t);
        update((p) => ({ ...p, stats: { ...p.stats, spokenCount: p.stats.spokenCount + 1 } }));
        const v = gradeSpeech(t, d.chunk.phrase);
        settle(v.pass, v.pass ? `👍 "${t}"` : `들린 말: "${t}" → 정답: ${d.chunk.phrase}`);
      },
      () => {
        setListening(false);
        setHeard("인식 실패 — 타이핑으로 답해도 돼요");
      },
    );
  };

  if (done) {
    const acc = Math.round((100 * correct) / drills.length);
    return (
      <div className="card center">
        {node}
        <div style={{ fontSize: 44 }}>{acc >= 90 ? "🏆" : acc >= 70 ? "🔥" : "💪"}</div>
        <div className="big mt">정답률 {acc}%</div>
        <div className="muted">
          최고 콤보 {best} · {correct}/{drills.length}
        </div>
        <div className="small mt">{acc >= 90 ? "미쳤다. 이 표현들 이제 네 거예요." : acc >= 70 ? "좋아요. 틀린 건 롤플레이에서 써보면서 굳혀요." : "괜찮아요, 처음엔 다 그래요. 실전 대화에서 한 번 더 써보면 붙어요."}</div>
        <button className="btn mt" onClick={() => onDone(xp)}>
          +{xp} XP 받고 실전 대화로 🎭
        </button>
      </div>
    );
  }

  const [exA] = d.chunk.example.split("\n");
  const [koA, koB] = d.chunk.exampleKo.split("\n");
  const timePct = d.seconds ? timeLeft / d.seconds : 0;
  const timedOut = (d.kind === "reflex" || d.kind === "speak") && timeLeft === 0 && !result;

  return (
    <div>
      {node}
      <div className="row between small mb">
        <span className="muted">
          {i + 1} / {drills.length}
        </span>
        <span className={`combo ${combo >= 3 ? "hot" : ""}`}>{combo >= 2 ? `🔥 ${combo} COMBO` : ""}</span>
        <span className="muted">{correct} 정답</span>
      </div>
      <div className="card">
        <div className="tiny muted">{KIND_LABEL[d.kind]}</div>

        {d.kind === "choice" && (
          <>
            <div className="example mt">
              <div className="k" style={{ fontSize: 15, color: "var(--text)" }}>
                {koA}
              </div>
              <div className="k" style={{ fontSize: 15, color: "var(--accent2)", fontWeight: 700 }}>
                {koB}
              </div>
            </div>
            <div className="mt">
              {d.options!.map((o) => {
                const isAns = o === d.chunk.phrase;
                const cls = result ? (isAns ? "correct" : o === picked ? "wrong" : "") : "";
                return (
                  <button
                    key={o}
                    className={`option ${cls}`}
                    disabled={!!result}
                    onClick={() => {
                      setPicked(o);
                      settle(isAns, isAns ? "정답!" : `정답: ${d.chunk.phrase}`);
                    }}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {d.kind === "cloze" && (
          <>
            <div className="example mt">
              <div className="b">{d.clozed}</div>
              <div className="k">
                {koA}
                {"\n"}
                {koB}
              </div>
            </div>
            <div className="row mt">
              <input ref={inputRef} className="input" placeholder="빈칸에 들어갈 말" value={typed} disabled={!!result} onChange={(e) => setTyped(e.target.value)} onKeyDown={(e) => e.key === "Enter" && !result && typed && checkTyped()} autoCapitalize="none" autoCorrect="off" />
              <button className="btn sm" disabled={!!result || !typed} onClick={checkTyped}>
                확인
              </button>
            </div>
          </>
        )}

        {(d.kind === "speak" || d.kind === "reflex") && (
          <>
            <div className="big mt">{d.chunk.ko}</div>
            <div className="small muted" style={{ marginTop: 4 }}>
              {koB?.replace(/^B: /, "")}
            </div>
            <div className="tiny muted mt">상황: {exA}</div>
            {!result && (
              <div className="countdown">
                <div style={{ width: `${timePct * 100}%` }} />
              </div>
            )}
            {d.kind === "speak" ? (
              <div className="center mt">
                <button className={`mic ${listening ? "listening" : ""}`} onClick={startListen} disabled={!!result}>
                  {listening ? "⏹" : "🎤"}
                </button>
                <div className="small mt muted" style={{ minHeight: 20 }}>
                  {listening ? "듣는 중…" : heard || "영어로 바로 말하기"}
                </div>
                {!result && (
                  <div className="row mt">
                    <input className="input" placeholder="또는 타이핑" value={typed} onChange={(e) => setTyped(e.target.value)} onKeyDown={(e) => e.key === "Enter" && typed && checkTyped()} autoCapitalize="none" autoCorrect="off" />
                    <button className="btn sm secondary" disabled={!typed} onClick={checkTyped}>
                      확인
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="row mt">
                <input ref={inputRef} className="input" placeholder="영어로 바로!" value={typed} disabled={!!result} onChange={(e) => setTyped(e.target.value)} onKeyDown={(e) => e.key === "Enter" && !result && typed && checkTyped()} autoCapitalize="none" autoCorrect="off" />
                <button className="btn sm" disabled={!!result || !typed} onClick={checkTyped}>
                  확인
                </button>
              </div>
            )}
            {timedOut && (
              <div className="tiny muted mt center">⏰ 시간 끝! 그래도 답해보세요 — 느려도 입 밖으로 내는 게 중요해요.</div>
            )}
          </>
        )}

        {result && (
          <div className={`verdict ${result.ok ? "ok" : "no"}`}>
            <div>{result.ok ? "✅ " : "❌ "}{result.msg}</div>
            {!result.ok && <div className="tiny muted mt">{d.chunk.note}</div>}
          </div>
        )}
      </div>
      {result && (
        <button className="btn" onClick={next}>
          다음 ▶
        </button>
      )}
    </div>
  );
}
