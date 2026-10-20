import { useCallback, useEffect, useMemo, useState } from "react";
import { loadProgress, saveProgress, touchStreak, type Progress } from "./lib/storage";
import Home from "./components/Home";
import Session from "./components/Session";
import Library from "./components/Library";
import SettingsScreen from "./components/Settings";
import FreeTalk from "./components/FreeTalk";
import Review from "./components/Review";

export type Screen = { name: "home" } | { name: "session"; day: number } | { name: "library"; day?: number } | { name: "settings" } | { name: "free" } | { name: "review" };

export type Update = (fn: (p: Progress) => Progress) => void;

export default function App() {
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const [screen, setScreen] = useState<Screen>({ name: "home" });

  useEffect(() => saveProgress(progress), [progress]);

  const update: Update = useCallback((fn) => setProgress((p) => fn(p)), []);
  const go = useCallback((s: Screen) => {
    window.scrollTo({ top: 0 });
    setScreen(s);
  }, []);

  // 앱을 열 때마다 스트릭 터치는 하지 않음 — 실제 학습을 해야 스트릭 (Session 에서 touch)
  const ctx = useMemo(() => ({ progress, update, go }), [progress, update, go]);

  switch (screen.name) {
    case "session":
      return <Session {...ctx} day={screen.day} />;
    case "library":
      return <Library {...ctx} initialDay={screen.day} />;
    case "settings":
      return <SettingsScreen {...ctx} />;
    case "free":
      return <FreeTalk {...ctx} />;
    case "review":
      return <Review {...ctx} />;
    default:
      return <Home {...ctx} />;
  }
}

export { touchStreak };
