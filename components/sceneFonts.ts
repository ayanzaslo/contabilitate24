export type SceneFonts = { display: string; body: string; mono: string };

/** Numele reale (hash-uite de next/font) ale fonturilor, pentru textele desenate pe canvas. */
export async function sceneFonts(): Promise<SceneFonts> {
  const cs = getComputedStyle(document.documentElement);
  const first = (v: string, fb: string) => (v.split(",")[0] || "").trim() || fb;
  const display = first(cs.getPropertyValue("--font-display"), "sans-serif");
  const body = first(cs.getPropertyValue("--font-body"), "sans-serif");
  const mono = first(cs.getPropertyValue("--font-mono"), "monospace");
  try {
    await Promise.all([
      document.fonts.load(`800 40px ${display}`),
      document.fonts.load(`500 17px ${body}`),
      document.fonts.load(`500 17px ${mono}`),
    ]);
    await document.fonts.ready;
  } catch {
    /* fonturile de rezervă sunt suficiente */
  }
  return { display, body, mono };
}
