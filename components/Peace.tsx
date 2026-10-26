import { peace as p, WA_MAIN } from "@/lib/content";
import { IArrow, ICheck, IShield, Reveal } from "./ui";

export default function Peace() {
  const [c1, c2, c3, c4] = p.cards;
  return (
    <section className="sec sec-desk" id="servicii">
      <div className="wrap">
        <header className="sec-head">
          <h2 className="h2">
            {p.title} <em>{p.titleEm}</em>
          </h2>
          <p className="lead">{p.lead}</p>
        </header>

        <ul className="rows services-rows">
          <Reveal as="li">
            <h3>{c1.t}</h3>
            <div>
              <p>
                {c1.pre}
                <strong>{c1.strong}</strong>
                {c1.d}
              </p>
              <p className="incl">
                <IShield size={16} />
                <span>
                  <b>Inclus:</b> {c1.incl}
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal as="li">
            <h3>{c2.t}</h3>
            <div>
              <p>{c2.d}</p>
              <dl className="facts">
                {c2.pair!.map(([a, b]) => (
                  <div key={a}>
                    <dt>{a}</dt>
                    <dd>{b}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal as="li">
            <h3>{c3.t}</h3>
            <div>
              <p>{c3.d}</p>
              <ul className="tick-list tight">
                {c3.list!.map((t) => (
                  <li key={t}>
                    <span className="tick">
                      <ICheck size={12} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal as="li">
            <h3>{c4.t}</h3>
            <div>
              <ul className="eco-list">
                {c4.sub!.map((s) => (
                  <li key={s.t}>
                    <b>{s.t}</b>
                    <span>{s.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </ul>

        <Reveal>
          <div className="callout callout-night">
            <p>
              <IShield size={18} />
              <span>
                <b>{p.promise.label}</b>
                {p.promise.text}
              </span>
            </p>
            <a className="btn btn-primary" href={WA_MAIN} target="_blank" rel="noopener">
              {p.promise.cta.replace(" →", "")} <IArrow size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
