import { useState } from "react";
import { DAYS } from "../content";
import type { Day } from "../types";
import type { Progress } from "../lib/storage";
import { touchStreak } from "../lib/storage";
import Roleplay from "../stages/Roleplay";
import type { Screen, Update } from "../App";

const CUSTOM_SCENES: { title: string; day: Day }[] = [
  {
    title: "☕ 그냥 수다 (아무 주제)",
    day: {
      day: 0, phase: 0, title: "Free Chat", titleKo: "자유 수다", introKo: "", chunks: [],
      roleplay: {
        setting: "No fixed scene. You are hanging out on a lazy afternoon, texting-slash-talking casually. Follow whatever topic the learner brings up; if nothing, bring up something fun (a weird news story, a show, weekend plans).",
        aiRole: "Sam, a 28-year-old American friend who lived in Seoul for two years, so you get Korean culture. Easygoing, funny, uses natural slang and lots of reactions.",
        userRoleKo: "Sam의 친구", goalKo: "그냥 편하게 수다. 배운 표현 아무거나 써보기.", opener: "Yo! What's going on? Anything fun happen today, or was it one of those days?",
      },
    },
  },
  {
    title: "🛬 공항 입국 심사",
    day: {
      day: 0, phase: 0, title: "Immigration", titleKo: "입국 심사", introKo: "", chunks: [],
      roleplay: {
        setting: "US airport immigration booth at LAX. Long line behind the learner. Standard questions, a bit brisk but not hostile.",
        aiRole: "Officer Ramirez, a CBP officer. Direct, efficient, neutral tone, asks short questions and follows up on vague answers.",
        userRoleKo: "미국에 막 도착한 여행자", goalKo: "방문 목적, 기간, 숙소를 또박또박 답하고 후속 질문에 당황하지 않기.", opener: "Next. Passport, please. What's the purpose of your visit?",
      },
    },
  },
  {
    title: "🍔 식당에서 주문 + 문제 생김",
    day: {
      day: 0, phase: 0, title: "Diner", titleKo: "식당", introKo: "", chunks: [],
      roleplay: {
        setting: "A busy American diner at lunch. The learner orders, then the wrong dish arrives and they need to sort it out politely.",
        aiRole: "Dee, a fast-talking, friendly-but-rushed server who calls everyone 'hon'.",
        userRoleKo: "손님", goalKo: "주문하고, 잘못 나온 음식 정중하게 바꾸고, 계산까지.", opener: "Hey hon, what can I get started for you? Coffee?",
      },
    },
  },
  {
    title: "💼 영어 면접 연습",
    day: {
      day: 0, phase: 0, title: "Interview", titleKo: "면접", introKo: "", chunks: [],
      roleplay: {
        setting: "A video call job interview with a US tech company for a role the learner describes. Conversational interview style, not a grilling.",
        aiRole: "Jordan, a hiring manager. Warm, curious, asks follow-ups like 'tell me more about that' and 'what would you do differently?'",
        userRoleKo: "지원자", goalKo: "자기소개, 경험 설명, 질문 하나 던지기. 너무 격식 차리지 않고 자연스럽게.", opener: "Hey, thanks for hopping on! Before we dive in, tell me a bit about yourself and what you've been working on.",
      },
    },
  },
];

export default function FreeTalk({ progress, update, go }: { progress: Progress; update: Update; go: (s: Screen) => void }) {
  const [scene, setScene] = useState<Day | null>(null);
  const [search, setSearch] = useState("");
  const learned = DAYS.filter((d) => progress.completedDays[d.day]);

  if (scene) {
    return (
      <div className="screen">
        <div className="topbar">
          <button className="iconbtn" onClick={() => setScene(null)}>←</button>
          <h1>💬 {scene.title}</h1>
        </div>
        <Roleplay
          day={scene}
          targets={scene.chunks}
          progress={progress}
          update={update}
          free
          onDone={(xp) => {
            update((p) => ({ ...touchStreak(p), xp: p.xp + xp }));
            go({ name: "home" });
          }}
        />
      </div>
    );
  }

  const filtered = DAYS.filter((d) => !search || `${d.title} ${d.titleKo}`.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="screen">
      <div className="topbar">
        <button className="iconbtn" onClick={() => go({ name: "home" })}>←</button>
        <h1>💬 자유 대화</h1>
      </div>
      <div className="small muted mb">장면을 고르면 AI 파트너가 그 역할로 대화해요. 끝나면 피드백도 받아요. {!progress.settings.apiKey && <b style={{ color: "var(--accent2)" }}>(API 키 필요)</b>}</div>
      <b>빠른 장면</b>
      <div className="mt mb">
        {CUSTOM_SCENES.map((c) => (
          <div key={c.title} className="list-item" onClick={() => setScene(c.day)}>
            <div className="grow">{c.title}</div>
            <span className="muted">›</span>
          </div>
        ))}
      </div>
      <b>배운 날 다시 하기 {learned.length ? `(${learned.length})` : ""}</b>
      <input className="input mt mb" placeholder="검색" value={search} onChange={(e) => setSearch(e.target.value)} />
      {filtered.map((d) => {
        const done = !!progress.completedDays[d.day];
        return (
          <div key={d.day} className={`list-item ${done ? "" : "locked"}`} onClick={() => setScene(d)}>
            <div className="daynum">{d.boss ? "👑" : d.day}</div>
            <div className="grow">
              <div style={{ fontWeight: 700 }}>{d.title}</div>
              <div className="tiny muted">{d.roleplay.goalKo}</div>
            </div>
            <span className="muted">›</span>
          </div>
        );
      })}
    </div>
  );
}
