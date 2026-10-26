import { spv as s, WA_MAIN } from "@/lib/content";
import { IArrow, ICheck, IX, Reveal } from "./ui";

export default function Spv() {
  return (
    <section className="sec sec-desk" id="spv">
      <div className="wrap">
        <header className="sec-head">
          <h2 className="h2">
            {s.title1} <em>{s.title2}</em>
          </h2>
          <div>
            <p className="lead">
              {s.lead} <strong>{s.lead2}</strong>
            </p>
            <p className="lead small">{s.ride}</p>
          </div>
        </header>

        <div className="versus">
          <Reveal className="versus-old">
            <h3 className="h3">{s.old.title}</h3>
            <ul className="x-list">
              {s.old.items.map((i) => (
                <li key={i}>
                  <span className="x">
                    <IX size={12} />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <p className="result">{s.old.result}</p>
          </Reveal>

          <Reveal className="versus-neo" delay={0.1}>
            <h3 className="h3">{s.neo.title}</h3>
            <ul className="tick-list">
              {s.neo.items.map(([t, d]) => (
                <li key={t}>
                  <span className="tick">
                    <ICheck size={12} />
                  </span>
                  <span>
                    <b>{t}</b>
                    <small>{d}</small>
                  </span>
                </li>
              ))}
            </ul>
            <dl className="facts">
              <div>
                <dt>{s.neo.spvDaily[0]}</dt>
                <dd>{s.neo.spvDaily[1]}</dd>
              </div>
              <div>
                <dt>{s.neo.archive[0]}</dt>
                <dd>{s.neo.archive[1]}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal>
          <figure className="personal">
            <blockquote className="personal-text">{s.personal.text}</blockquote>
            <figcaption>
              <b>{s.personal.team}</b>
              <small>{s.personal.place}</small>
              <span className="dim">{s.personal.plain}</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <div className="callout">
            <div className="ride-text">
              <p>
                <b>{s.rideBox.label}</b>
                {s.rideBox.text} <em>„{s.rideBox.msg}”.</em>
              </p>
              <ul className="pill-row">
                {s.rideBox.chips.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <a className="btn btn-primary" href={WA_MAIN} target="_blank" rel="noopener">
              {s.rideBox.cta.replace(" →", "")} <IArrow size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
