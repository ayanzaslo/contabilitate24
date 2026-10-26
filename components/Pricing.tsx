import { pricing as p } from "@/lib/content";
import Calculator from "./Calculator";
import { ICheck, Reveal } from "./ui";

export default function Pricing() {
  return (
    <section className="sec sec-paper" id="pret">
      <div className="wrap">
        <header className="sec-head">
          <h2 className="h2">
            {p.title1} <em>{p.titleEm}</em>
            {p.title2}
          </h2>
          <p className="lead">
            {p.lead1} <strong>{p.leadFixed}</strong> {p.lead2}
          </p>
        </header>

        <div className="split split-top">
          <Reveal className="split-lead">
            <h3 className="h3">{p.whyTitle}</h3>
            <ul className="plain-list">
              {p.why.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <p className="note">
              <b>{p.legalModel}</b> {p.legalModelText}
            </p>
          </Reveal>

          <div>
            <h3 className="h3 mb">{p.factorsTitle}</h3>
            <ol className="rows factors">
              {p.factors.map((f, i) => (
                <Reveal as="li" key={f.n} delay={i * 0.04}>
                  <h4>
                    {f.n.replace(/^\d+ • /, "")}
                    <small>{f.v}</small>
                  </h4>
                  <p>{f.d}</p>
                  {"extra" in f && f.extra && (
                    <dl className="facts">
                      {f.extra.map(([a, b]) => (
                        <div key={a}>
                          <dt>{a}</dt>
                          <dd>{b}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  {"tags" in f && f.tags && (
                    <ul className="pill-row">
                      {f.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                  {"stats" in f && f.stats && (
                    <dl className="facts">
                      {f.stats.map(([a, b]) => (
                        <div key={a}>
                          <dt>{a}</dt>
                          <dd>{b}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <div className="cols-2 divided lower">
          <Reveal className="col-block">
            <h3 className="h3">{p.vector.title}</h3>
            <p className="body">
              <strong>{p.vector.lead}</strong> {p.vector.d}
            </p>
            <p className="body">{p.vector.renegotiate}</p>
            <ul className="tick-list tight">
              {p.vector.triggers.map((t) => (
                <li key={t}>
                  <span className="tick">
                    <ICheck size={12} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="body">{p.vector.after}</p>
          </Reveal>

          <Reveal className="col-block" delay={0.1}>
            <h3 className="h3">{p.offer.title}</h3>
            <ol className="offer-steps">
              {p.offer.steps.map(([t, d]) => (
                <li key={t}>
                  <b>{t}</b>
                  <small>{d}</small>
                </li>
              ))}
            </ol>
            <p className="note">{p.offer.guarantee}</p>
          </Reveal>
        </div>

        <Reveal>
          <div className="next-box">
            <h2 className="h2 h2-md">{p.next.title}</h2>
            <p className="lead">{p.next.d}</p>
            <Calculator />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
