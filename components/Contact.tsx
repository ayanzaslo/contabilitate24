import { company, contact as c, finalCta, footer as f, people, WA_MAIN } from "@/lib/content";
import { IArrow, IClock, IMail, IPhone, IPin, IWhatsapp, Reveal } from "./ui";

export function Contact() {
  const { nicolae, loredana } = people;
  return (
    <section className="sec sec-paper" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-left">
          <h2 className="company-name">{company.name}</h2>
          <p className="company-sub">{company.tagline}</p>

          <Reveal>
            <div className="seat">
              <span className="icon-box">
                <IPin size={18} />
              </span>
              <div>
                <small>{c.seatLabel}</small>
                <b>{company.address}</b>
              </div>
            </div>
            <div className="waze">
              <IPin size={14} />
              <div>
                <b>{c.waze}</b>
                <span>{company.wazeAddress}</span>
                <span className="map-btns">
                  <a className="btn btn-sm btn-dark" href={company.wazeUrl} target="_blank" rel="noopener">
                    {c.wazeBtn} <IArrow size={13} />
                  </a>
                  <a className="btn btn-sm btn-dark" href={company.mapsUrl} target="_blank" rel="noopener">
                    {c.mapsBtn} <IArrow size={13} />
                  </a>
                </span>
              </div>
            </div>
          </Reveal>

          <div className="hours-grid">
            <div className="hours">
              <small>{c.hours.label}</small>
              <b>
                <IClock size={15} /> {c.hours.value}
              </b>
              <span>{c.hours.sub}</span>
            </div>
            <div className="hours hours-ink">
              <small>{c.phone.label}</small>
              <b>
                <span className="pulse" /> {c.phone.value}
              </b>
              <span>{c.phone.sub}</span>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="contact-card">
            <h3 className="h3">{c.direct}</h3>

            {[nicolae, loredana].map((p, i) => (
              <div key={p.name} className={`person ${i ? "person-paper" : ""}`}>
                <div>
                  <b>
                    <IPhone size={15} /> {p.phone}
                  </b>
                  <strong>{p.name}</strong>
                  <small>{p.role}</small>
                </div>
                <div className="person-actions">
                  <a className="btn btn-sm btn-light" href={p.tel}>
                    <IPhone size={14} /> {c.call}
                  </a>
                  <a className="btn btn-sm btn-wa" href={p.wa} target="_blank" rel="noopener">
                    <IWhatsapp size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            ))}

            <h3 className="h3 mt">
              <IMail size={16} /> {c.emailTitle}
            </h3>
            <a className="mail" href={`mailto:${company.emailGeneral}`}>
              <small>{c.emailGeneralLabel}</small>
              <b>{company.emailGeneral}</b>
            </a>
            <a className="mail mail-paper" href={`mailto:${company.emailFlorina}`}>
              <small>{c.emailFlorinaLabel}</small>
              <b>{company.emailFlorina}</b>
            </a>
            <p className="micro">{c.emailNote}</p>
            <p className="micro">{c.waNote}</p>
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <div className="callout">
          <p>
            <b>{c.quick.label}</b>
            {c.quick.text}
          </p>
          <a className="btn btn-dark" href={WA_MAIN} target="_blank" rel="noopener">
            {c.quick.cta.replace(" →", "")} <IArrow size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  const { nicolae, loredana } = people;
  return (
    <section className="final">
      <div className="wrap final-in">
        <div>
          <h2 className="h2 final-title">{finalCta.title}</h2>
          <p className="lead">
            {finalCta.text1}
            <a href={nicolae.tel}>{nicolae.phone}</a>
            {finalCta.text2}
            <a href={loredana.tel}>{loredana.phone}</a>
            {finalCta.text3}
          </p>
          <div className="cta-row">
            <a className="btn btn-sm btn-light" href={nicolae.tel}>
              <IPhone size={14} /> {nicolae.phone} Nicolae
            </a>
            <a className="btn btn-sm btn-light" href={loredana.tel}>
              <IPhone size={14} /> {loredana.phone} Loredana
            </a>
          </div>
        </div>
        <div className="final-actions">
          <a className="btn btn-wa btn-lg" href={nicolae.wa} target="_blank" rel="noopener">
            {finalCta.waNicolae} <IArrow size={18} />
          </a>
          <a className="btn btn-ghost btn-lg" href={loredana.wa} target="_blank" rel="noopener">
            {finalCta.waLoredana} <IWhatsapp size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { nicolae, loredana } = people;
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden>
              <span>C</span>
              <i>S</i>
              <span>H</span>
            </span>
            <div>
              <b>{company.name}</b>
              <small>{f.tagline}</small>
            </div>
          </div>
          <h4>{f.official}</h4>
          <dl className="footer-dl">
            <div>
              <dt>{f.nameLabel}</dt>
              <dd>{company.name}</dd>
            </div>
            <div>
              <dt>{f.seatLabel}</dt>
              <dd>{company.address}</dd>
            </div>
            <div>
              <dt>{f.wazeMaps}</dt>
              <dd>
                {company.wazeAddress}
                <span className="map-links">
                  <a href={company.wazeUrl} target="_blank" rel="noopener">Waze</a>
                  <a href={company.mapsUrl} target="_blank" rel="noopener">Google Maps</a>
                </span>
              </dd>
            </div>
            <div>
              <dt>{nicolae.name}</dt>
              <dd>
                <a href={nicolae.tel}>{nicolae.phone}</a> • {nicolae.role}
              </dd>
            </div>
            <div>
              <dt>{loredana.name}</dt>
              <dd>
                <a href={loredana.tel}>{loredana.phone}</a> • {loredana.role}
              </dd>
            </div>
            <div>
              <dt>{f.emailFirm}</dt>
              <dd>
                <a href={`mailto:${company.emailGeneral}`}>{company.emailGeneral}</a>
              </dd>
            </div>
            <div>
              <dt>{f.florina}</dt>
              <dd>
                <a href={`mailto:${company.emailFlorina}`}>{company.emailFlorina}</a>
              </dd>
            </div>
          </dl>
          <p className="footer-hours">
            <b>{f.hours}</b>
            {f.hoursVal}
            <strong>{f.hoursStrong}</strong>
          </p>
          <p className="footer-legal-line">{f.legalLine}</p>
        </div>

        <div>
          <h4>{f.servicesTitle}</h4>
          <ul className="footer-list">
            {f.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{f.legalTitle}</h4>
          <p className="footer-legal">
            <b>{f.legalName}</b> {f.legalText}
          </p>
          <a className="btn btn-wa btn-sm" href={WA_MAIN} target="_blank" rel="noopener">
            <IWhatsapp size={14} /> WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
