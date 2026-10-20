import { useEffect, useMemo, useState } from "react";
import { ALL_CHUNKS, getDay, getChunk, DAYS } from "../content";
import { dueCards, newCard } from "../lib/srs";
import { touchStreak, todayKey, type Progress, type StageId, type SessionState } from "../lib/storage";
import { XP } from "../lib/xp";
import { Stepper, Timer } from "./ui";
import type { Screen, Update } from "../App";
import WarmUp from "../stages/WarmUp";
import Learn from "../stages/Learn";
import Drill from "../stages/Drill";
import Roleplay from "../stages/Roleplay";
import WrapUp from "../stages/WrapUp";

const STAGE_META: Record<StageId, { label: string; min: number; emoji: string }> = {
  warmup: { label: "워밍업 복습", min: 10, emoji: "🔁" },
  learn: { label: "오늘의 표현", min: 15, emoji: "🧠" },
  drill: { label: "반사신경 드릴", min: 15, emoji: "⚡" },
  roleplay: { label: "실전 대화", min: 15, emoji: "🎭" },
  wrapup: { label: "마무리", min: 5, emoji: "🏁" },
};

export default function Session({ progress, update, go, day: dayNum }: { progress: Progress; update: Update; go: (s: Screen) => void; day: number }) {
  const day = getDay(dayNum)!;
  const hasDue = dueCards(progress.srs).length > 0;
  const stages: StageId[] = useMemo(() => (hasDue || dayNum > 1 ? ["warmup", "learn", "drill", "roleplay", "wrapup"] : ["learn", "drill", "roleplay", "wrapup"]), [dayNum, hasDue]);

  // 세션 시작/복원
  useEffect(() => {
    update((p) => {
      const base = touchStreak(p);
      if (base.session && base.session.day === dayNum) return base;
      const s: SessionState = { day: dayNum, stageIndex: 0, startedAt: new Date().toISOString(), stageXp: {} };
      return { ...base, session: s, startedAt: base.startedAt ?? todayKey() };
    });
  }, [dayNum, update]);

  const session = progress.session && progress.session.day === dayNum ? progress.session : null;
  const idx = Math.min(session?.stageIndex ?? 0, stages.length - 1);
  const stage = stages[idx];
  const [confirmExit, setConfirmExit] = useState(false);

  const stageDone = (xp: number) => {
    update((p) => {
      if (!p.session) return p;
      const s = { ...p.session, stageIndex: p.session.stageIndex + 1, stageXp: { ...p.session.stageXp, [stage]: xp } };
      return { ...p, xp: p.xp + xp, session: s };
    });
    window.scrollTo({ top: 0 });
  };

  const finishDay = () => {
    update((p) => {
      const total = Object.values(p.session?.stageXp ?? {}).reduce((a, b) => a + (b ?? 0), 0);
      const bonus = day.boss ? XP.bossComplete : XP.dayComplete;
      const srs = { ...p.srs };
      for (const c of day.chunks) if (!srs[c.id]) srs[c.id] = newCard(c.id);
      const completedDays = { ...p.completedDays, [day.day]: { date: todayKey(), xp: total + bonus } };
      const badges = new Set(p.badges);
      if (day.day === 1) badges.add("first-day");
      if (day.day === 10) badges.add("boss-1");
      for (let ph = 1; ph <= 5; ph++) {
        const all = DAYS.filter((d) => d.phase === ph).every((d) => completedDays[d.day]);
        if (all) badges.add(`phase-${ph}`);
      }
      if (p.streak >= 3) badges.add("streak-3");
      if (p.streak >= 7) badges.add("streak-7");
      if (p.streak >= 30) badges.add("streak-30");
      if (p.stats.roleplayTurns >= 100) badges.add("talker-100");
      if (p.stats.spokenCount >= 200) badges.add("speaker-200");
      return {
        ...p,
        xp: p.xp + bonus,
        srs,
        completedDays,
        badges: [...badges],
        currentDay: Math.max(p.currentDay, day.day + 1),
        session: null,
        stats: { ...p.stats, minutes: p.stats.minutes + Math.round((Date.now() - new Date(p.session?.startedAt ?? Date.now()).getTime()) / 60000) },
      };
    });
    go({ name: "home" });
  };

  if (!session) return <div className="screen center muted">불러오는 중…</div>;

  const meta = STAGE_META[stage];
  const targets = day.chunks;
  // 보스전: 지난 10일 표현도 타깃에 포함
  const bossTargets = day.boss
    ? DAYS.filter((d) => d.day > day.day - 10 && d.day < day.day)
        .flatMap((d) => d.chunks)
        .filter((c) => progress.srs[c.id])
    : [];

  return (
    <div className="screen">
      <div className="topbar">
        <button className="iconbtn" onClick={() => setConfirmExit(true)}>
          ✕
        </button>
        <div className="grow">
          <div className="tiny muted">
            Day {day.day} · {day.title}
          </div>
          <h1>
            {meta.emoji} {meta.label}
          </h1>
        </div>
        <Timer startedAt={session.startedAt} budgetMin={60} />
      </div>
      <Stepper total={stages.length} index={idx} />

      {stage === "warmup" && <WarmUp progress={progress} update={update} onDone={stageDone} />}
      {stage === "learn" && <Learn day={day} progress={progress} update={update} onDone={stageDone} />}
      {stage === "drill" && <Drill day={day} pool={ALL_CHUNKS} progress={progress} update={update} onDone={stageDone} />}
      {stage === "roleplay" && (
        <Roleplay
          key={day.day}
          day={day}
          targets={targets}
          bonusTargets={bossTargets}
          progress={progress}
          update={update}
          onDone={stageDone}
          log={session.roleplayLog}
          onLog={(log) => update((p) => (p.session ? { ...p, session: { ...p.session, roleplayLog: log } } : p))}
        />
      )}
      {stage === "wrapup" && <WrapUp day={day} progress={progress} session={session} onFinish={finishDay} />}

      {confirmExit && (
        <div className="modal-bg" onClick={() => setConfirmExit(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="big">잠깐 나갈까요?</div>
            <div className="muted mt">진행 상황은 저장돼요. 홈에서 "이어서 하기"로 돌아올 수 있어요.</div>
            <button className="btn mt" onClick={() => go({ name: "home" })}>
              저장하고 나가기
            </button>
            <button className="btn ghost mt" onClick={() => setConfirmExit(false)}>
              계속하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export { getChunk };
