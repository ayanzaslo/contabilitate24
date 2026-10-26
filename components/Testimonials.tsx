import { testimonials as t } from "@/lib/content";
import { Reveal } from "./ui";

export default function Testimonials() {
  return (
    <section className="sec sec-paper" id="testimoniale">
      <div className="wrap">
        <header className="sec-head">
          <h2 className="h2">{t.title}</h2>
          <p className="lead small">{t.sub}</p>
        </header>
        <ul className="journal">
          {t.items.map((it, i) => (
            <Reveal as="li" key={it.who} delay={i * 0.08} className="entry">
              <blockquote className="quote-text">{it.text}</blockquote>
              <p className="entry-by">
                <b>{it.who}</b>
                <small>{it.meta}</small>
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
