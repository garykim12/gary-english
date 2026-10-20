import { useState } from "react";
import type { Day } from "../types";
import type { Progress } from "../lib/storage";
import { XP } from "../lib/xp";
import { canListen, listen, type Listener } from "../lib/speech";
import { gradeSpeech } from "../lib/similarity";
import { SpeakButton, RegisterChip, useXpPop } from "../components/ui";
import type { Update } from "../App";

export default function Learn({ day, progress, update, onDone }: { day: Day; progress: Progress; update: Update; onDone: (xp: number) => void }) {
  const [i, setI] = useState(0);
  const [xp, setXp] = useState(0);
  const [heard, setHeard] = useState("");
  const [listening, setListening] = useState(false);
  const [verdict, setVerdict] = useState<null | { pass: boolean; score: number }>(null);
  const [shadowed, setShadowed] = useState<Record<string, boolean>>({});
  const [lis, setLis] = useState<Listener | null>(null);
  const { pop, node } = useXpPop();
  const s = progress.settings;
  const chunk = day.chunks[i];
  const [exA, exB] = chunk.example.split("\n");
  const [koA, koB] = chunk.exampleKo.split("\n");

  const startListen = () => {
    if (listening) {
      lis?.stop();
      return;
    }
    setHeard("");
    setVerdict(null);
    setListening(true);
    const l = listen(
      (t) => setHeard(t),
      (t) => {
        setListening(false);
        setHeard(t);
        const v = gradeSpeech(t, chunk.phrase);
        setVerdict(v);
        update((p) => ({ ...p, stats: { ...p.stats, spokenCount: p.stats.spokenCount + 1 } }));
        if (v.pass && !shadowed[chunk.id]) {
          setShadowed({ ...shadowed, [chunk.id]: true });
          setXp((x) => x + XP.shadowBonus);
          pop(XP.shadowBonus);
        }
      },
      (e) => {
        setListening(false);
        setHeard(e === "not-allowed" ? "마이크 권한을 허용해주세요" : e === "no-speech" ? "소리가 안 들렸어요. 다시!" : "인식 실패 — 다시 시도");
      },
    );
    setLis(l);
  };

  const next = () => {
    const gained = XP.learnChunk;
    setXp((x) => x + gained);
    pop(gained);
    setHeard("");
    setVerdict(null);
    if (i + 1 >= day.chunks.length) {
      onDone(xp + gained);
    } else setI(i + 1);
  };

  return (
    <div>
      {node}
      <div className="row between small muted mb">
        <span>
          표현 {i + 1} / {day.chunks.length}
        </span>
        <RegisterChip r={chunk.register} />
      </div>
      <div className="card glow">
        <div className="phrase">{chunk.phrase}</div>
        <div className="ko">{chunk.ko}</div>
        <div className="mt">
          <SpeakButton text={chunk.phrase} rate={s.voiceRate} voiceName={s.voiceName} auto={s.autoSpeak} />
        </div>
        <div className="example">
          <div className="b">{exA}</div>
          <div className="b" style={{ marginTop: 4 }}>
            {exB}
          </div>
          <div className="k">
            {koA}
            {"\n"}
            {koB}
          </div>
          <div className="mt">
            <SpeakButton text={chunk.example} rate={s.voiceRate} voiceName={s.voiceName} label="대화 듣기" />
          </div>
        </div>
        <div className="note">{chunk.note}</div>
      </div>

      <div className="card center">
        <div className="small muted mb">🎙 소리 내서 따라 말하기 (입에 붙이는 핵심!)</div>
        {canListen() ? (
          <>
            <button className={`mic ${listening ? "listening" : ""}`} onClick={startListen}>
              {listening ? "⏹" : "🎤"}
            </button>
            <div className="small mt" style={{ minHeight: 22 }}>
              {listening ? <span className="muted">듣는 중… "{chunk.phrase}"</span> : heard ? `"${heard}"` : <span className="muted">탭하고 말해보세요</span>}
            </div>
            {verdict && (
              <div className={`verdict ${verdict.pass ? "ok" : "no"}`}>
                {verdict.pass ? `👍 좋아요! (${Math.round(verdict.score * 100)}% 일치)` : `🙃 다시 한번. 들리는 대로 따라해보세요 (${Math.round(verdict.score * 100)}%)`}
              </div>
            )}
          </>
        ) : (
          <div className="small muted">이 브라우저는 음성 인식을 지원하지 않아요. Chrome/Safari에서 열면 마이크로 연습할 수 있어요. 지금은 소리 내서 3번 따라 읽어보세요!</div>
        )}
      </div>

      <div className="row" style={{ gap: 8 }}>
        {i > 0 && (
          <button className="btn secondary" style={{ width: "auto" }} onClick={() => setI(i - 1)}>
            ◀
          </button>
        )}
        <button className="btn" onClick={next}>
          {i + 1 >= day.chunks.length ? "드릴로 가기 ⚡" : "다음 표현 ▶"}
        </button>
      </div>
    </div>
  );
}
