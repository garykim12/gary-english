import { DAYS, getDay, phaseOf, TOTAL_DAYS } from "../content";
import { dueCount } from "../lib/srs";
import { todayKey, type Progress } from "../lib/storage";
import { levelFor, BADGES } from "../lib/xp";
import { Progress as Bar } from "./ui";
import type { Screen, Update } from "../App";

export default function Home({ progress, go }: { progress: Progress; update: Update; go: (s: Screen) => void }) {
  const p = progress;
  const lv = levelFor(p.xp);
  const todayDone = Object.values(p.completedDays).some((d) => d.date === todayKey());
  const day = getDay(p.currentDay);
  const phase = phaseOf(p.currentDay);
  const due = dueCount(p.srs);
  const inProgress = p.session && p.session.day === p.currentDay;
  const finished = p.currentDay > TOTAL_DAYS;
  const noKey = !p.settings.apiKey;

  return (
    <div className="screen">
      <div className="topbar">
        <div className="grow">
          <div className="small muted">안녕, {p.settings.userName} 👋</div>
          <h1>
            {lv.emoji} Lv.{lv.level} {lv.title}
          </h1>
        </div>
        <button className="iconbtn" onClick={() => go({ name: "settings" })} title="설정">
          ⚙️
        </button>
      </div>

      <div className="card">
        <div className="row between small">
          <span className="muted">{p.xp.toLocaleString()} XP</span>
          <span className="muted">{lv.next ? `다음 레벨까지 ${(lv.next.xp - p.xp).toLocaleString()}` : "MAX"}</span>
        </div>
        <Bar value={lv.pct} className="mt" />
        <div className="row mt" style={{ gap: 8 }}>
          <div className="stat">
            <div className="v">🔥 {p.streak}</div>
            <div className="l">연속 일수</div>
          </div>
          <div className="stat">
            <div className="v">{Object.keys(p.completedDays).length}</div>
            <div className="l">완료한 날</div>
          </div>
          <div className="stat">
            <div className="v">{Object.keys(p.srs).length}</div>
            <div className="l">내 표현</div>
          </div>
        </div>
      </div>

      {noKey && (
        <div className="card" style={{ borderColor: "rgba(255,179,71,0.5)" }}>
          <div className="row">
            <span style={{ fontSize: 22 }}>🔑</span>
            <div className="grow small">
              <b>AI 대화 파트너를 켜려면 API 키가 필요해요.</b>
              <div className="muted">표현 학습·드릴은 키 없이도 되지만, 롤플레이와 피드백은 Claude가 해줘요.</div>
            </div>
          </div>
          <button className="btn secondary sm mt" onClick={() => go({ name: "settings" })}>
            설정에서 키 넣기
          </button>
        </div>
      )}

      {finished ? (
        <div className="card glow center">
          <div style={{ fontSize: 48 }}>🦅</div>
          <div className="big">100일 완주!</div>
          <div className="muted mt">이제 자유 대화로 계속 갈고닦아요. 복습 카드도 계속 돌아와요.</div>
        </div>
      ) : day ? (
        <div className={`card ${todayDone ? "" : "glow"}`}>
          <div className="row between">
            <span className="chip">
              Phase {phase.phase} · {phase.titleKo}
            </span>
            {day.boss && <span className="chip work">👑 BOSS</span>}
          </div>
          <div className="huge mt">
            Day {day.day}. {day.title}
          </div>
          <div className="muted" style={{ marginTop: 4 }}>
            {day.titleKo}
          </div>
          <div className="small mt" style={{ lineHeight: 1.5 }}>
            {day.introKo}
          </div>
          <div className="row wrap mt" style={{ gap: 6 }}>
            {day.chunks.slice(0, 4).map((c) => (
              <span key={c.id} className="chip">
                {c.phrase}
              </span>
            ))}
            <span className="chip">+{day.chunks.length - 4}</span>
          </div>
          <div className="tiny muted mt">⏱ 약 60분 · 복습 {due}개 · 표현 8개 · 드릴 → 실전 대화</div>
          <button className="btn mt" onClick={() => go({ name: "session", day: day.day })}>
            {inProgress ? "이어서 하기 ▶" : todayDone ? "하루 더 달리기 ▶" : "오늘 세션 시작 ▶"}
          </button>
          {todayDone && <div className="tiny muted center mt">오늘 할당량은 끝났어요. 더 해도 되지만 내일 복습이 진짜 실력이에요.</div>}
        </div>
      ) : null}

      <div className="quick">
        <button className="btn secondary" onClick={() => go({ name: "review" })}>
          🔁<span>복습{due > 0 ? ` ${due}` : ""}</span>
        </button>
        <button className="btn secondary" onClick={() => go({ name: "free" })}>
          💬<span>자유 대화</span>
        </button>
        <button className="btn secondary" onClick={() => go({ name: "library" })}>
          📚<span>표현집</span>
        </button>
      </div>

      <div className="card mt">
        <div className="row between mb">
          <b>100일 지도</b>
          <span className="small muted">
            {Object.keys(p.completedDays).length}/{TOTAL_DAYS}
          </span>
        </div>
        <div className="dots">
          {DAYS.map((d) => {
            const done = !!p.completedDays[d.day];
            const today = d.day === p.currentDay;
            return (
              <div
                key={d.day}
                className={`dot ${done ? "done" : ""} ${today ? "today" : ""} ${d.boss ? "boss" : ""}`}
                title={`Day ${d.day}: ${d.title}`}
                onClick={() => go({ name: "library", day: d.day })}
                style={{ cursor: "pointer" }}
              >
                {d.boss ? "👑" : d.day}
              </div>
            );
          })}
        </div>
      </div>

      <div className="card">
        <b>배지</b>
        <div className="badges mt">
          {BADGES.map((b) => (
            <div key={b.id} className={`badge ${p.badges.includes(b.id) ? "" : "locked"}`} title={b.desc}>
              <span>{b.emoji}</span>
              <span>{b.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="tiny muted center">
        {p.stats.roleplayTurns}턴 대화 · {p.stats.spokenCount}회 말하기 · 드릴 정답률{" "}
        {p.stats.drillsAnswered ? Math.round((100 * p.stats.drillsCorrect) / p.stats.drillsAnswered) : 0}%
      </div>
    </div>
  );
}
