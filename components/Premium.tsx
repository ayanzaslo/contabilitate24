import { people, premium as p } from "@/lib/content";
import { IArrow, IClock, IPhone, IPin, Reveal } from "./ui";

export default function Premium() {
  const { credit, pickup } = p;
  return (
    <section className="sec sec-paper" id="premium">
      <div className="wrap">
        <header className="sec-head">
          <h2 className="h2">
            {p.title1} <em>{p.title2}</em> <span className="nowrap">{p.title3}</span>
          </h2>
          <div>
            <p className="lead">{p.lead}</p>
            <ul className="chip-row">
              {p.strip.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </header>

        <div className="cols-2 divided">
          <Reveal className="col-block">
            <h3 className="h3">{credit.t}</h3>
            <p className="body">
              {credit.p[0]}
              <strong>{credit.p[1]}</strong>
              {credit.p[2]}
              <strong>{credit.p[3]}</strong>
              {credit.p[4]}
              <strong>{credit.p[5]}</strong>
              {credit.p[6]}
            </p>
            <p className="body">{credit.d}</p>
            <ul className="pill-row">
              {credit.docs.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p className="incl">
              <IClock size={16} />
              <span>
                <b>{credit.get}</b> {credit.getText} <b>{credit.time}</b>
              </span>
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href={people.nicolae.tel}>
                <IPhone size={16} /> {credit.cta}
              </a>
              <span className="mono-tag">{credit.tag}</span>
            </div>
          </Reveal>

          <Reveal className="col-block" delay={0.1}>
            <h3 className="h3">{pickup.t}</h3>
            <p className="where">
              <IPin size={14} /> {pickup.area}
            </p>
            <p className="body">
              {pickup.p1}
              <strong>{pickup.p2}</strong>
              {pickup.p3}
              <strong>{pickup.p4}</strong>.
            </p>
            <p className="body">{pickup.d}</p>
            <dl className="facts">
              <div>
                <dt>{pickup.pick}</dt>
                <dd>{pickup.pickText}</dd>
              </div>
              <div>
                <dt>{pickup.zone}</dt>
                <dd>{pickup.zoneText}</dd>
              </div>
            </dl>
            <p className="note">
              <b>{pickup.free}</b>
              {pickup.freeText}
            </p>
            <div className="cta-row">
              <a className="btn btn-dark" href={people.loredana.tel}>
                <IPhone size={16} /> {pickup.ctaLong}
              </a>
              <span className="mono-tag">{pickup.oneCall}</span>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="callout">
            <p>
              <b>{p.why.title}</b> {p.why.text}
            </p>
            <a className="btn btn-dark" href={people.nicolae.wa} target="_blank" rel="noopener">
              {p.why.cta.replace(" →", "")} <IArrow size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
