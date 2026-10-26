import { steps } from "@/lib/content";
import { Reveal } from "./ui";

export default function Steps() {
  return (
    <section className="sec sec-paper" id="pasi">
      <div className="wrap">
        <header className="sec-head solo">
          <h2 className="h2">{steps.title}</h2>
        </header>
        <ol className="steps">
          {steps.items.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 0.1} className="step">
              <h3 className="h3">{s.t}</h3>
              <p className="body">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
