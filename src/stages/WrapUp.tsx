import type { Day } from "../types";
import type { Progress, SessionState } from "../lib/storage";
import { XP, levelFor } from "../lib/xp";
import { SpeakButton } from "../components/ui";

export default function WrapUp({ day, progress, session, onFinish }: { day: Day; progress: Progress; session: SessionState; onFinish: () => void }) {
  const stageXp = session.stageXp;
  const total = Object.values(stageXp).reduce((a, b) => a + (b ?? 0), 0);
  const bonus = day.boss ? XP.bossComplete : XP.dayComplete;
  const minutes = Math.round((Date.now() - new Date(session.startedAt).getTime()) / 60000);
  const before = levelFor(progress.xp);
  const after = levelFor(progress.xp + bonus);
  const s = progress.settings;
  return (
    <div>
      <div className="card glow center">
        <div style={{ fontSize: 52 }}>{day.boss ? "👑" : "🎉"}</div>
        <div className="huge mt">Day {day.day} 클리어!</div>
        <div className="muted mt">{minutes}분 · 🔥 {progress.streak}일 연속</div>
        <div className="row mt" style={{ gap: 8 }}>
          <div className="stat"><div className="v">{total}</div><div className="l">오늘 XP</div></div>
          <div className="stat"><div className="v">+{bonus}</div><div className="l">{day.boss ? "보스 보너스" : "완주 보너스"}</div></div>
          <div className="stat"><div className="v">{progress.xp + bonus}</div><div className="l">총 XP</div></div>
        </div>
        {after.level > before.level && (
          <div className="verdict ok mt">🆙 레벨업! Lv.{after.level} {after.emoji} {after.title}</div>
        )}
      </div>
      <div className="card">
        <b>오늘 입에 붙인 표현 8개 — 자기 전에 한 번만 더 소리 내서</b>
        <div className="col mt">
          {day.chunks.map((c) => (
            <div key={c.id} className="row between" style={{ borderBottom: "1px solid var(--border)", padding: "8px 0" }}>
              <div>
                <div style={{ fontWeight: 700 }}>{c.phrase}</div>
                <div className="tiny muted">{c.ko}</div>
              </div>
              <SpeakButton text={c.phrase} rate={s.voiceRate} voiceName={s.voiceName} label="" />
            </div>
          ))}
        </div>
      </div>
      <div className="card flat small">
        🧠 이 표현들은 내일, 3일 뒤, 일주일 뒤에 복습 카드로 돌아와요. 그게 "어렴풋이 아는 것"을 "입에서 나오는 것"으로 바꾸는 유일한 방법이에요.
      </div>
      <button className="btn" onClick={onFinish}>
        완료하고 홈으로 🏠
      </button>
    </div>
  );
}
