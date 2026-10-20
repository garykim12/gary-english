import { useMemo, useState } from "react";
import { getChunk } from "../content";
import { dueCards, review, type Grade } from "../lib/srs";
import type { Progress } from "../lib/storage";
import { XP } from "../lib/xp";
import { SpeakButton, useXpPop } from "../components/ui";
import type { Update } from "../App";

export default function WarmUp({ progress, update, onDone, standalone = false }: { progress: Progress; update: Update; onDone: (xp: number) => void; standalone?: boolean }) {
  const cards = useMemo(() => dueCards(progress.srs, undefined, standalone ? 40 : 15), []); // eslint-disable-line react-hooks/exhaustive-deps
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [xp, setXp] = useState(0);
  const [results, setResults] = useState<Grade[]>([]);
  const { pop, node } = useXpPop();
  const s = progress.settings;

  if (!cards.length) {
    return (
      <div className="card center">
        <div style={{ fontSize: 40 }}>☕</div>
        <div className="big mt">오늘은 복습 카드가 없어요</div>
        <div className="muted mt">내일부터 오늘 배운 표현이 돌아와요. 바로 새 표현으로!</div>
        <button className="btn mt" onClick={() => onDone(0)}>
          다음 ▶
        </button>
      </div>
    );
  }

  if (i >= cards.length) {
    const good = results.filter((g) => g >= 2).length;
    return (
      <div className="card center">
        <div style={{ fontSize: 40 }}>{good / results.length >= 0.8 ? "🔥" : "💪"}</div>
        <div className="big mt">
          복습 {results.length}장 중 {good}장 기억!
        </div>
        <div className="muted mt">"다시"로 표시한 건 내일 또 나와요. 틀린 걸 다시 보는 게 진짜 암기예요.</div>
        <div className="row mt wrap" style={{ gap: 6, justifyContent: "center" }}>
          {cards.map((c, k) => (
            <span key={c.id} className={`chip ${results[k] >= 2 ? "done" : ""}`}>
              {getChunk(c.id)?.phrase}
            </span>
          ))}
        </div>
        <button className="btn mt" onClick={() => onDone(xp)}>
          +{xp} XP 받고 다음 ▶
        </button>
      </div>
    );
  }

  const card = cards[i];
  const chunk = getChunk(card.id);
  if (!chunk) {
    setI(i + 1);
    return null;
  }
  const exB = chunk.example.split("\n")[1] ?? chunk.example;
  const exBKo = chunk.exampleKo.split("\n")[1] ?? chunk.exampleKo;

  const grade = (g: Grade) => {
    const gained = g >= 2 ? XP.warmupCard : g === 1 ? 2 : 0;
    if (gained) pop(gained);
    setXp(xp + gained);
    setResults([...results, g]);
    update((p) => ({ ...p, srs: { ...p.srs, [card.id]: review(card, g) } }));
    setFlipped(false);
    setI(i + 1);
  };

  return (
    <div>
      {node}
      <div className="row between small muted mb">
        <span>
          {i + 1} / {cards.length}
        </span>
        <span>Day {Number(card.id.slice(1).split("-")[0])} 표현 · {card.lapses > 0 ? `놓친 적 ${card.lapses}번` : `${card.reps}번째 복습`}</span>
      </div>
      <div className={`card flip ${flipped ? "glow" : ""}`} onClick={() => !flipped && setFlipped(true)}>
        <div className="tiny muted">이 상황, 영어로 뭐라고 하죠? (머릿속으로 말하고 → 탭해서 확인)</div>
        <div className="big mt">{chunk.ko}</div>
        <div className="example mt">
          <div className="k">{exBKo.replace(/^B: /, "")}</div>
        </div>
        {flipped ? (
          <div className="mt">
            <div className="phrase">{chunk.phrase}</div>
            <div className="example">
              <div className="b">{exB.replace(/^B: /, "")}</div>
            </div>
            <div className="mt">
              <SpeakButton text={chunk.phrase} rate={s.voiceRate} voiceName={s.voiceName} auto={s.autoSpeak} />
            </div>
            <div className="note">{chunk.note}</div>
          </div>
        ) : (
          <div className="center muted mt small">탭해서 정답 보기 👆</div>
        )}
      </div>
      {flipped && (
        <div className="grade-row">
          <button className="btn secondary" style={{ color: "var(--red)" }} onClick={() => grade(0)}>
            😵 다시
          </button>
          <button className="btn secondary" onClick={() => grade(1)}>
            🤔 어려움
          </button>
          <button className="btn secondary" style={{ color: "var(--green)" }} onClick={() => grade(2)}>
            😊 기억남
          </button>
          <button className="btn green" onClick={() => grade(3)}>
            😎 완벽
          </button>
        </div>
      )}
    </div>
  );
}
