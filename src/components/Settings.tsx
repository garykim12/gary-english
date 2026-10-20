import { useRef, useState } from "react";
import { MODELS } from "../lib/ai";
import { englishVoices, speak, canSpeak, canListen } from "../lib/speech";
import { defaultProgress, exportProgress, type Progress } from "../lib/storage";
import type { Screen, Update } from "../App";

export default function SettingsScreen({ progress, update, go }: { progress: Progress; update: Update; go: (s: Screen) => void }) {
  const s = progress.settings;
  const set = (patch: Partial<typeof s>) => update((p) => ({ ...p, settings: { ...p.settings, ...patch } }));
  const [showKey, setShowKey] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const voices = canSpeak() ? englishVoices() : [];

  const doExport = () => {
    const blob = new Blob([exportProgress(progress)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `gary-english-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };
  const doImport = async (f: File) => {
    try {
      const parsed = JSON.parse(await f.text()) as Progress;
      if (parsed.version !== 1) throw new Error("bad version");
      update((p) => ({ ...parsed, settings: { ...parsed.settings, apiKey: p.settings.apiKey || parsed.settings.apiKey } }));
      alert("복원 완료!");
    } catch {
      alert("파일을 읽을 수 없어요.");
    }
  };

  return (
    <div className="screen">
      <div className="topbar">
        <button className="iconbtn" onClick={() => go({ name: "home" })}>←</button>
        <h1>⚙️ 설정</h1>
      </div>

      <div className="card">
        <b>🔑 Anthropic API 키</b>
        <div className="tiny muted mt">
          롤플레이·힌트·피드백에 쓰여요. 키는 이 브라우저(localStorage)에만 저장되고, 요청은 브라우저에서 Anthropic으로 바로 가요.{" "}
          <a href="https://platform.claude.com/" target="_blank" rel="noreferrer">키 발급</a>
        </div>
        <div className="row mt">
          <input className="input" type={showKey ? "text" : "password"} placeholder="sk-ant-..." value={s.apiKey} onChange={(e) => set({ apiKey: e.target.value.trim() })} autoCapitalize="none" autoCorrect="off" />
          <button className="iconbtn" onClick={() => setShowKey(!showKey)}>{showKey ? "🙈" : "👁"}</button>
        </div>
        <div className="mt small">모델</div>
        <select className="input" value={s.model} onChange={(e) => set({ model: e.target.value })}>
          {MODELS.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
        </select>
        <div className="tiny muted mt">하루 세션(롤플레이 ~12턴 + 피드백)에 Opus 기준 대략 $0.10~0.30 정도예요. Sonnet은 그 절반 이하.</div>
      </div>

      <div className="card">
        <b>🔊 음성</b>
        {canSpeak() ? (
          <>
            <div className="mt small">목소리</div>
            <select className="input" value={s.voiceName} onChange={(e) => set({ voiceName: e.target.value })}>
              <option value="">자동 (추천)</option>
              {voices.map((v) => <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>)}
            </select>
            <div className="mt small">속도: {s.voiceRate.toFixed(2)}x</div>
            <input type="range" min={0.6} max={1.3} step={0.05} value={s.voiceRate} onChange={(e) => set({ voiceRate: Number(e.target.value) })} style={{ width: "100%" }} />
            <label className="row mt small"><input type="checkbox" checked={s.autoSpeak} onChange={(e) => set({ autoSpeak: e.target.checked })} /> 표현/대화 자동 읽어주기</label>
            <button className="btn secondary sm mt" onClick={() => speak("Hey! What's up? I'm down for tacos if you are.", { rate: s.voiceRate, voiceName: s.voiceName })}>테스트 재생</button>
          </>
        ) : <div className="muted small mt">이 브라우저는 음성 합성을 지원하지 않아요.</div>}
        <div className="tiny muted mt">🎤 음성 인식: {canListen() ? "지원됨" : "미지원 — Chrome 또는 Safari를 써주세요"}</div>
      </div>

      <div className="card">
        <b>👤 이름</b>
        <input className="input mt" value={s.userName} onChange={(e) => set({ userName: e.target.value })} />
      </div>

      <div className="card">
        <b>💾 백업</b>
        <div className="tiny muted mt">진행 상황은 이 기기 브라우저에만 저장돼요. 다른 기기로 옮기려면 내보내기 → 가져오기. (API 키는 백업에 포함되지 않아요)</div>
        <div className="row mt">
          <button className="btn secondary sm" onClick={doExport}>내보내기</button>
          <button className="btn secondary sm" onClick={() => fileRef.current?.click()}>가져오기</button>
          <input ref={fileRef} type="file" accept="application/json" style={{ display: "none" }} onChange={(e) => e.target.files?.[0] && doImport(e.target.files[0])} />
        </div>
      </div>

      <div className="card">
        <b>🧨 초기화</b>
        {confirmReset ? (
          <div className="mt">
            <div className="small" style={{ color: "var(--red)" }}>정말요? 100일 진행, XP, 복습 카드가 전부 사라져요. (API 키는 유지)</div>
            <div className="row mt">
              <button className="btn sm" style={{ background: "var(--red)" }} onClick={() => { update((p) => ({ ...defaultProgress(), settings: p.settings })); setConfirmReset(false); }}>전부 지우기</button>
              <button className="btn secondary sm" onClick={() => setConfirmReset(false)}>취소</button>
            </div>
          </div>
        ) : <button className="btn ghost sm mt" onClick={() => setConfirmReset(true)}>진행 상황 초기화</button>}
      </div>
      <div className="tiny muted center">Gary English · 100 Days to Native</div>
    </div>
  );
}
