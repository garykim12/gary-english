import { useMemo, useState } from "react";
import { DAYS, PHASES } from "../content";
import type { Progress } from "../lib/storage";
import { SpeakButton, RegisterChip } from "./ui";
import type { Screen, Update } from "../App";

export default function Library({ progress, go, initialDay }: { progress: Progress; update: Update; go: (s: Screen) => void; initialDay?: number }) {
  const [day, setDay] = useState<number | null>(initialDay ?? null);
  const [q, setQ] = useState("");
  const s = progress.settings;
  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return DAYS.flatMap((d) => d.chunks.map((c) => ({ d, c }))).filter(({ c }) => `${c.phrase} ${c.ko} ${c.note}`.toLowerCase().includes(t)).slice(0, 40);
  }, [q]);

  if (day !== null) {
    const d = DAYS.find((x) => x.day === day)!;
    const done = !!progress.completedDays[d.day];
    return (
      <div className="screen">
        <div className="topbar">
          <button className="iconbtn" onClick={() => setDay(null)}>←</button>
          <div className="grow">
            <div className="tiny muted">Day {d.day} · Phase {d.phase}</div>
            <h1>{d.title}</h1>
          </div>
          {done && <span className="chip done">완료</span>}
        </div>
        <div className="small muted mb">{d.titleKo}</div>
        <div className="card flat small">{d.introKo}</div>
        {d.chunks.map((c) => (
          <div key={c.id} className="card">
            <div className="row between">
              <div className="phrase" style={{ fontSize: 22 }}>{c.phrase}</div>
              <RegisterChip r={c.register} />
            </div>
            <div className="ko">{c.ko}</div>
            <div className="mt"><SpeakButton text={c.phrase} rate={s.voiceRate} voiceName={s.voiceName} /></div>
            <div className="example">
              <div className="b">{c.example}</div>
              <div className="k">{c.exampleKo}</div>
            </div>
            <div className="note">{c.note}</div>
          </div>
        ))}
        <div className="card flat small">
          <b>🎭 실전 장면:</b> {d.roleplay.goalKo}
        </div>
        {d.day === progress.currentDay && (
          <button className="btn" onClick={() => go({ name: "session", day: d.day })}>이 날 세션 시작 ▶</button>
        )}
      </div>
    );
  }

  return (
    <div className="screen">
      <div className="topbar">
        <button className="iconbtn" onClick={() => go({ name: "home" })}>←</button>
        <h1>📚 표현집</h1>
      </div>
      <input className="input mb" placeholder="표현/뜻 검색 (예: 거절, down, 피곤)" value={q} onChange={(e) => setQ(e.target.value)} />
      {q.trim() ? (
        results.length ? (
          results.map(({ d, c }) => (
            <div key={c.id} className="list-item" onClick={() => setDay(d.day)}>
              <div className="daynum">{d.day}</div>
              <div className="grow">
                <div style={{ fontWeight: 700 }}>{c.phrase}</div>
                <div className="tiny muted">{c.ko}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="muted center">검색 결과 없음</div>
        )
      ) : (
        PHASES.map((p) => (
          <div key={p.phase}>
            <div className="row between mt mb">
              <b>Phase {p.phase}. {p.title}</b>
              <span className="tiny muted">{p.titleKo}</span>
            </div>
            {p.days.map((d) => {
              const done = !!progress.completedDays[d.day];
              const current = d.day === progress.currentDay;
              return (
                <div key={d.day} className={`list-item ${done || current ? "" : "locked"}`} onClick={() => setDay(d.day)}>
                  <div className="daynum" style={current ? { background: "var(--accent)", color: "#fff" } : done ? { background: "var(--green)", color: "#0b1f14" } : {}}>
                    {d.boss ? "👑" : d.day}
                  </div>
                  <div className="grow">
                    <div style={{ fontWeight: 700 }}>{d.title}</div>
                    <div className="tiny muted">{d.titleKo}</div>
                  </div>
                  <span className="muted">›</span>
                </div>
              );
            })}
          </div>
        ))
      )}
    </div>
  );
}
