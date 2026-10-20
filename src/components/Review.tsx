import type { Progress } from "../lib/storage";
import { touchStreak } from "../lib/storage";
import WarmUp from "../stages/WarmUp";
import type { Screen, Update } from "../App";

export default function Review({ progress, update, go }: { progress: Progress; update: Update; go: (s: Screen) => void }) {
  return (
    <div className="screen">
      <div className="topbar">
        <button className="iconbtn" onClick={() => go({ name: "home" })}>←</button>
        <h1>🔁 복습</h1>
      </div>
      <WarmUp
        progress={progress}
        update={update}
        standalone
        onDone={(xp) => {
          update((p) => ({ ...touchStreak(p), xp: p.xp + xp }));
          go({ name: "home" });
        }}
      />
    </div>
  );
}
