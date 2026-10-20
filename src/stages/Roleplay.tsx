import { useEffect, useMemo, useRef, useState } from "react";
import type { Chunk, Day } from "../types";
import type { Progress } from "../lib/storage";
import { XP } from "../lib/xp";
import { buildSystemPrompt, roleplayTurn, roleplayFeedback, hint as askHint, explainError, type ChatTurn, type Feedback } from "../lib/ai";
import { canListen, listen, speak, stopSpeaking, type Listener } from "../lib/speech";
import { containsPhrase } from "../lib/similarity";
import { useXpPop } from "../components/ui";
import type { Update } from "../App";

interface Msg {
  role: "user" | "assistant" | "fix" | "praise";
  text: string;
  fix?: { original: string; better: string; whyKo: string };
}

export default function Roleplay({
  day,
  targets,
  bonusTargets = [],
  progress,
  update,
  onDone,
  log,
  onLog,
  free = false,
}: {
  day: Day;
  targets: Chunk[];
  bonusTargets?: Chunk[];
  progress: Progress;
  update: Update;
  onDone: (xp: number) => void;
  log?: { role: "user" | "assistant"; text: string }[];
  onLog?: (log: { role: "user" | "assistant"; text: string }[]) => void;
  free?: boolean;
}) {
  const s = progress.settings;
  const system = useMemo(() => buildSystemPrompt(day, [...targets, ...bonusTargets], s.userName, free), [day, targets, bonusTargets, s.userName, free]);
  const [msgs, setMsgs] = useState<Msg[]>(() => (log && log.length ? log.map((l) => ({ role: l.role, text: l.text })) : [{ role: "assistant", text: day.roleplay.opener }]));
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [used, setUsed] = useState<Set<string>>(() => {
    const u = new Set<string>();
    for (const l of log ?? []) if (l.role === "user") for (const c of targets) if (containsPhrase(l.text, c.phrase)) u.add(c.id);
    return u;
  });
  const [xp, setXp] = useState(0);
  const [listening, setListening] = useState(false);
  const [hints, setHints] = useState<{ en: string; ko: string }[] | null>(null);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [sceneDone, setSceneDone] = useState(false);
  const [showMission, setShowMission] = useState(!log || log.length === 0);
  const lisRef = useRef<Listener | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { pop, node } = useXpPop();
  const history: ChatTurn[] = msgs.filter((m) => m.role === "user" || m.role === "assistant").map((m) => ({ role: m.role as "user" | "assistant", text: m.text }));
  const userTurns = history.filter((h) => h.role === "user").length;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, busy, hints]);
  useEffect(() => {
    if (s.autoSpeak && msgs.length === 1) speak(day.roleplay.opener, { rate: s.voiceRate, voiceName: s.voiceName });
    return () => stopSpeaking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const send = async (textRaw: string) => {
    const text = textRaw.trim();
    if (!text || busy) return;
    setErr("");
    setHints(null);
    setInput("");
    const newUsed = new Set(used);
    let gained = XP.roleplayTurn;
    for (const c of targets) if (!newUsed.has(c.id) && containsPhrase(text, c.phrase)) { newUsed.add(c.id); gained += XP.roleplayChunk; }
    const next: Msg[] = [...msgs, { role: "user", text }];
    setMsgs(next);
    setBusy(true);
    try {
      const turn = await roleplayTurn(s.apiKey, s.model, system, [...history, { role: "user", text }]);
      for (const id of turn.usedChunkIds) if (targets.some((t) => t.id === id) && !newUsed.has(id)) { newUsed.add(id); gained += XP.roleplayChunk; }
      setUsed(newUsed);
      setXp((x) => x + gained);
      pop(gained);
      const extra: Msg[] = [];
      if (turn.correction && turn.correction.better && turn.correction.better.trim().toLowerCase() !== text.toLowerCase()) extra.push({ role: "fix", text: "", fix: turn.correction });
      if (turn.praiseKo) extra.push({ role: "praise", text: turn.praiseKo });
      const all: Msg[] = [...next, ...extra, { role: "assistant", text: turn.reply }];
      setMsgs(all);
      onLog?.(all.filter((m) => m.role === "user" || m.role === "assistant").map((m) => ({ role: m.role as "user" | "assistant", text: m.text })));
      update((p) => ({ ...p, stats: { ...p.stats, roleplayTurns: p.stats.roleplayTurns + 1 } }));
      if (turn.sceneDone) setSceneDone(true);
      if (s.autoSpeak) speak(turn.reply, { rate: s.voiceRate, voiceName: s.voiceName });
    } catch (e) {
      setErr(explainError(e));
      setMsgs(msgs); // roll back user message so they can retry
      setInput(text);
    } finally {
      setBusy(false);
    }
  };

  const startListen = () => {
    if (listening) { lisRef.current?.stop(); return; }
    stopSpeaking();
    setListening(true);
    lisRef.current = listen(
      (t) => setInput(t),
      (t) => { setListening(false); if (t) { update((p) => ({ ...p, stats: { ...p.stats, spokenCount: p.stats.spokenCount + 1 } })); send(t); } },
      () => setListening(false),
    );
  };

  const getHint = async () => {
    if (busy) return;
    setBusy(true);
    setErr("");
    try { setHints(await askHint(s.apiKey, s.model, system, history)); } catch (e) { setErr(explainError(e)); } finally { setBusy(false); }
  };

  const finish = async () => {
    stopSpeaking();
    if (userTurns === 0) { onDone(0); return; }
    setBusy(true);
    setErr("");
    try { setFeedback(await roleplayFeedback(s.apiKey, s.model, day, targets, history)); } catch (e) { setErr(explainError(e)); } finally { setBusy(false); }
  };

  if (feedback) {
    const bonus = Math.round(feedback.score * 10);
    return (
      <div>
        <div className="card center">
          <div className="feedback-score">{feedback.score}/10</div>
          <div className="big mt">{feedback.headlineKo}</div>
        </div>
        <div className="card">
          <b>👍 잘한 것</b>
          <ul className="small" style={{ paddingLeft: 18, lineHeight: 1.6 }}>
            {feedback.winsKo.map((w, i) => <li key={i}>{w}</li>)}
          </ul>
        </div>
        {feedback.fixes.length > 0 && (
          <div className="card">
            <b>🔧 이렇게 말하면 더 네이티브</b>
            {feedback.fixes.map((f, i) => (
              <div key={i} className="example" style={{ marginTop: 8 }}>
                <div className="muted" style={{ textDecoration: "line-through" }}>{f.you}</div>
                <div style={{ color: "var(--blue)", fontWeight: 700 }}>{f.native}</div>
                <div className="k">{f.whyKo}</div>
              </div>
            ))}
          </div>
        )}
        <div className="card">
          <b>🎁 보너스 표현</b>
          <div className="phrase mt" style={{ fontSize: 22 }}>{feedback.bonusPhrase.phrase}</div>
          <div className="ko">{feedback.bonusPhrase.ko}</div>
          <div className="example">{feedback.bonusPhrase.example}</div>
        </div>
        <div className="card flat small">💡 내일의 포인트: {feedback.nextTipKo}</div>
        <button className="btn" onClick={() => onDone(xp + bonus)}>
          +{xp + bonus} XP 받고 {free ? "홈으로" : "마무리"} ▶
        </button>
      </div>
    );
  }

  const allTargets = [...targets, ...bonusTargets];
  return (
    <div style={{ paddingBottom: 80 }}>
      {node}
      {showMission && (
        <div className="card glow">
          <div className="row between">
            <span className="chip">{day.boss ? "👑 보스전" : free ? "💬 자유 대화" : "🎭 미션"}</span>
            <button className="speakbtn" onClick={() => setShowMission(false)}>접기</button>
          </div>
          <div className="small mt" style={{ lineHeight: 1.6 }}>
            <div><b>상대:</b> {day.roleplay.aiRole}</div>
            <div><b>나:</b> {day.roleplay.userRoleKo}</div>
            <div style={{ color: "var(--accent2)" }}><b>미션:</b> {day.roleplay.goalKo}</div>
          </div>
          <div className="tiny muted mt">막히면 💡 힌트 · 한국어로 쳐도 상대가 영어로 어떻게 말할지 알려줘요 · 마이크🎤로 말하면 더 좋아요</div>
        </div>
      )}
      {!showMission && (
        <div className="row small muted mb" style={{ cursor: "pointer" }} onClick={() => setShowMission(true)}>
          🎯 {day.roleplay.goalKo}
        </div>
      )}
      <div className="row wrap mb" style={{ gap: 6 }}>
        {allTargets.map((c) => (
          <span key={c.id} className={`chip target ${used.has(c.id) ? "done" : ""}`} onClick={() => speak(c.phrase, { rate: s.voiceRate, voiceName: s.voiceName })} title={c.ko}>
            {used.has(c.id) ? "✓ " : ""}{c.phrase}
          </span>
        ))}
      </div>
      <div className="chat">
        {msgs.map((m, i) =>
          m.role === "fix" ? (
            <div key={i} className="bubble fix">
              <div className="orig">{m.fix!.original}</div>
              <div className="better">→ {m.fix!.better}</div>
              <div className="tiny muted">{m.fix!.whyKo}</div>
            </div>
          ) : m.role === "praise" ? (
            <div key={i} className="bubble praise">🌟 {m.text}</div>
          ) : (
            <div key={i} className={`bubble ${m.role === "user" ? "me" : "ai"}`} onClick={() => m.role === "assistant" && speak(m.text, { rate: s.voiceRate, voiceName: s.voiceName })}>
              {m.text}
            </div>
          ),
        )}
        {busy && <div className="bubble ai typing">…</div>}
        {hints && (
          <div className="hintbox">
            <div className="tiny muted">💡 이렇게 말해보세요 (탭하면 입력)</div>
            {hints.map((h, i) => (
              <div key={i} className="opt" onClick={() => { setInput(h.en); setHints(null); }}>
                <div>{h.en}</div>
                <div className="tiny muted">{h.ko}</div>
              </div>
            ))}
          </div>
        )}
        {err && <div className="verdict no small">{err}</div>}
        {(sceneDone || userTurns >= 6) && (
          <div className="card flat center small">
            {sceneDone ? "대화가 자연스럽게 마무리됐어요." : `${userTurns}턴 했어요.`} 피드백 받고 끝낼까요?
            <button className="btn green sm mt" onClick={finish} disabled={busy}>🏁 피드백 받기</button>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <div className="chatbar">
        <button className="iconbtn" onClick={getHint} disabled={busy} title="힌트">💡</button>
        <textarea className="input" rows={1} placeholder={listening ? "듣는 중…" : "영어로 말해보세요 (한국어도 OK)"} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); } }} />
        {canListen() && <button className={`micsm ${listening ? "listening" : ""}`} onClick={startListen} disabled={busy}>{listening ? "⏹" : "🎤"}</button>}
        {input.trim() ? <button className="send" onClick={() => send(input)} disabled={busy}>↑</button> : <button className="iconbtn" onClick={finish} disabled={busy} title="끝내고 피드백">🏁</button>}
      </div>
    </div>
  );
}
