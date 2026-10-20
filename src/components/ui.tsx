import { useEffect, useState, type ReactNode } from "react";
import { speak, stopSpeaking, canSpeak } from "../lib/speech";

export function Progress({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`progress ${className}`}>
      <div style={{ width: `${Math.round(Math.max(0, Math.min(1, value)) * 100)}%` }} />
    </div>
  );
}

export function Stepper({ total, index }: { total: number; index: number }) {
  return (
    <div className="stepper">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`step ${i < index ? "done" : i === index ? "active" : ""}`} />
      ))}
    </div>
  );
}

export function SpeakButton({ text, rate, voiceName, label = "듣기", auto = false }: { text: string; rate: number; voiceName: string; label?: string; auto?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const play = async (r = rate) => {
    if (!canSpeak()) return;
    setPlaying(true);
    await speak(text, { rate: r, voiceName });
    setPlaying(false);
  };
  useEffect(() => {
    if (auto) play();
    return () => stopSpeaking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);
  if (!canSpeak()) return null;
  return (
    <span className="row" style={{ gap: 6 }}>
      <button className={`speakbtn ${playing ? "playing" : ""}`} onClick={() => play()}>
        🔊 {label}
      </button>
      <button className="speakbtn" onClick={() => play(Math.max(0.5, rate * 0.7))} title="천천히">
        🐢
      </button>
    </span>
  );
}

export function XpPop({ amount, onDone }: { amount: number; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1100);
    return () => clearTimeout(t);
  }, [onDone]);
  return <div className="xp-pop">+{amount} XP</div>;
}

export function Modal({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export function RegisterChip({ r }: { r: string }) {
  const label: Record<string, string> = { casual: "캐주얼", slang: "슬랭", neutral: "중립", work: "일터" };
  return <span className={`chip ${r}`}>{label[r] ?? r}</span>;
}

export function Timer({ startedAt, budgetMin }: { startedAt: string; budgetMin: number }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const sec = Math.max(0, Math.floor((now - new Date(startedAt).getTime()) / 1000));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  const over = m >= budgetMin;
  return (
    <span className={`timer ${over ? "over" : ""}`}>
      ⏱ {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")} / {budgetMin}m
    </span>
  );
}

export function useXpPop() {
  const [pops, setPops] = useState<{ id: number; amount: number }[]>([]);
  const pop = (amount: number) => setPops((p) => [...p, { id: Date.now() + Math.random(), amount }]);
  const node = pops.map((p) => <XpPop key={p.id} amount={p.amount} onDone={() => setPops((x) => x.filter((y) => y.id !== p.id))} />);
  return { pop, node };
}
