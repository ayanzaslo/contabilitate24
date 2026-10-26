import { coverage as cv, WA_MAIN } from "@/lib/content";
import { IArrow, ICheck, IWhatsapp, Reveal } from "./ui";

export default function Coverage() {
  const strip = [cv.strip.title, cv.strip.text, cv.strip.eu, cv.strip.a, cv.strip.b];
  return (
    <section className="sec sec-paper" id="acoperire">
      <div className="wrap">
        <ul className="strip">
          {strip.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <ul className="trust-list">
          {cv.trust.map((t) => (
            <li key={t}>
              <span className="tick">
                <ICheck size={12} />
              </span>
              {t}
            </li>
          ))}
        </ul>

        <header className="sec-head">
          <h2 className="h2">
            {cv.title1} <em>{cv.title2}</em>
          </h2>
          <div>
            <p className="lead small">{cv.disclaimer}</p>
            <ul className="chip-row">
              {cv.chips.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </header>

        <div className="cols-2 divided">
          <Reveal className="col-block">
            <h3 className="h3">{cv.ro.title}</h3>
            <p className="body">
              {cv.ro.lead} <strong>{cv.ro.cities}</strong> {cv.ro.rest}
            </p>
            <h4 className="h4">{cv.ro.whatTitle}</h4>
            <ul className="dash-list">
              {cv.ro.items.map((i) => (
                <li key={i.t}>
                  <b>{i.t}</b> {i.d}
                </li>
              ))}
            </ul>
            <ul className="pill-row">
              {cv.ro.cityList.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="note">
              <b>{cv.ro.seat}</b> {cv.ro.seatText}
            </p>
          </Reveal>

          <Reveal className="col-block" delay={0.1}>
            <h3 className="h3">{cv.eu.title}</h3>
            <p className="body">
              {cv.eu.lead} <strong>{cv.eu.bold}</strong>
              {cv.eu.rest}
            </p>
            <h4 className="h4">{cv.eu.whatTitle}</h4>
            <ul className="dash-list">
              {cv.eu.items.map((i) => (
                <li key={i.t}>
                  <b>{i.t}</b> {i.d}
                </li>
              ))}
            </ul>
            <ul className="pill-row">
              <li>{cv.eu.dual}</li>
              {cv.eu.tags.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <dl className="facts">
              <div>
                <dt>VIES</dt>
                <dd>{cv.eu.viesTitle}</dd>
              </div>
              <div>
                <dt>{cv.eu.detTitle}</dt>
                <dd>{cv.eu.detText}</dd>
              </div>
            </dl>
            <a className="btn btn-primary" href={WA_MAIN} target="_blank" rel="noopener">
              {cv.eu.cta} <IArrow size={16} />
            </a>
          </Reveal>
        </div>

        <Reveal>
          <div className="callout">
            <p>
              <b>{cv.trustBox.title}</b> {cv.trustBox.text}
            </p>
            <a className="btn btn-wa" href={WA_MAIN} target="_blank" rel="noopener">
              <IWhatsapp size={16} /> {cv.trustBox.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
