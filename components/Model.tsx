import { model } from "@/lib/content";
import { ICheck, Reveal } from "./ui";

function Rich({ parts }: { parts: (string | string[])[] }) {
  return (
    <>
      {parts.map((p, i) => (typeof p === "string" ? <span key={i}>{p}</span> : <strong key={i}>{p[0]}</strong>))}
    </>
  );
}

export default function Model() {
  const b = model.benefit;
  const x = model.extract;
  return (
    <section className="sec sec-desk" id="model">
      <div className="wrap">
        <header className="sec-head">
          <h2 className="h2">{model.title}</h2>
          <p className="lead">{model.lead}</p>
        </header>

        <div className="cols-3 divided">
          {model.pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08} className="col-block">
              <h3 className="h3">{p.t}</h3>
              <p className="body">
                <Rich parts={p.body} />
              </p>
              {p.quote && <blockquote className="law-quote">{p.quote}</blockquote>}
              {p.points.length > 0 && (
                <ul className="tick-list tight">
                  {p.points.map((pt) => (
                    <li key={pt}>
                      <span className="tick">
                        <ICheck size={12} />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        <div className="split">
          <Reveal className="split-lead">
            <h2 className="h2 h2-md">{b.title}</h2>
            <p className="lead">{b.lead}</p>
          </Reveal>
          <ul className="rows">
            {b.items.map((it, i) => (
              <Reveal as="li" key={it.t} delay={i * 0.06}>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal>
          <article className="extract">
            <div className="extract-grid">
              <div>
                <h3 className="h3">{x.law}</h3>
                <blockquote className="law-quote">{x.q1}</blockquote>
                <blockquote className="law-quote">{x.q2}</blockquote>
                <p className="gloss">{x.gloss}</p>
              </div>
              <div>
                <h4 className="h4">{x.importantTitle}</h4>
                <ul className="tick-list">
                  {x.important.map((t) => (
                    <li key={t}>
                      <span className="tick">
                        <ICheck size={12} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="stamps">
                  {x.stamps.map((s, i) => (
                    <span key={s} className={`stamp ${i ? "stamp-2" : ""}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="services">
          <h3 className="h3">{model.services.title}</h3>
          <ul className="leaders">
            {model.services.items.map(([t, d]) => (
              <Reveal as="li" key={t}>
                <b>{t}</b>
                <small>{d}</small>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
