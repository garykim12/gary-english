let voices: SpeechSynthesisVoice[] = [];

function loadVoices() {
  if (typeof speechSynthesis === "undefined") return;
  voices = speechSynthesis.getVoices();
}
if (typeof speechSynthesis !== "undefined") {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

export function englishVoices(): SpeechSynthesisVoice[] {
  loadVoices();
  return voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
}

function pickVoice(name: string): SpeechSynthesisVoice | undefined {
  const en = englishVoices();
  if (name) {
    const v = en.find((x) => x.name === name);
    if (v) return v;
  }
  const pref = ["Samantha", "Google US English", "Microsoft Aria", "Microsoft Jenny", "Alex", "Daniel"];
  for (const p of pref) {
    const v = en.find((x) => x.name.includes(p));
    if (v) return v;
  }
  return en.find((x) => x.lang === "en-US") ?? en[0];
}

export function canSpeak(): boolean {
  return typeof speechSynthesis !== "undefined";
}

export function speak(text: string, opts: { rate?: number; voiceName?: string } = {}): Promise<void> {
  return new Promise((resolve) => {
    if (!canSpeak()) return resolve();
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/^A: |^B: /gm, ""));
    u.lang = "en-US";
    u.rate = opts.rate ?? 0.95;
    const v = pickVoice(opts.voiceName ?? "");
    if (v) u.voice = v;
    u.onend = () => resolve();
    u.onerror = () => resolve();
    speechSynthesis.speak(u);
  });
}

export function stopSpeaking() {
  if (canSpeak()) speechSynthesis.cancel();
}

type SR = typeof window extends { SpeechRecognition: infer T } ? T : any;

export function canListen(): boolean {
  const w = window as any;
  return !!(w.SpeechRecognition || w.webkitSpeechRecognition);
}

export interface Listener {
  stop: () => void;
}

/** 마이크로 영어 듣기. 중간 결과는 onInterim, 최종은 onFinal. */
export function listen(
  onInterim: (t: string) => void,
  onFinal: (t: string) => void,
  onError: (e: string) => void,
): Listener {
  const w = window as any;
  const Ctor: SR = w.SpeechRecognition || w.webkitSpeechRecognition;
  if (!Ctor) {
    onError("unsupported");
    return { stop() {} };
  }
  const rec = new Ctor();
  rec.lang = "en-US";
  rec.interimResults = true;
  rec.continuous = false;
  rec.maxAlternatives = 1;
  let finalText = "";
  let done = false;
  rec.onresult = (ev: any) => {
    let interim = "";
    for (let i = ev.resultIndex; i < ev.results.length; i++) {
      const r = ev.results[i];
      if (r.isFinal) finalText += r[0].transcript;
      else interim += r[0].transcript;
    }
    onInterim(finalText + interim);
  };
  rec.onerror = (ev: any) => {
    if (done) return;
    done = true;
    onError(ev.error || "error");
  };
  rec.onend = () => {
    if (done) return;
    done = true;
    onFinal(finalText.trim());
  };
  try {
    rec.start();
  } catch (e) {
    onError("start-failed");
  }
  return {
    stop() {
      try {
        rec.stop();
      } catch {
        /* ignore */
      }
    },
  };
}
