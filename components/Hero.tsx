import { hero, WA_MAIN } from "@/lib/content";
import { HeroScene } from "./Scenes";
import { IArrow, IClock, ICheck, IShield, Reveal } from "./ui";

/** Cele cinci controale acoperite, tipărite ca o bandă de adunat: fiecare linie „la zi”. */
const LEDGER: [string, string][] = [
  ["CIM", "economist angajat + Revisal"],
  ["ANAF", "control: vin eu ca angajat"],
  ["ITM", "control: vin eu ca angajat"],
  ["SPV", "e-Factura fără token"],
  ["ONRC", "orice județ, via jurist"],
];

function Ledger() {
  return (
    <table className="ledger">
      <caption className="sr-only">Controale acoperite, toate la zi</caption>
      <thead>
        <tr>
          <th scope="col">Control</th>
          <th scope="col">Ce acopăr</th>
          <th scope="col" className="num">
            Stare
          </th>
        </tr>
      </thead>
      <tbody>
        {LEDGER.map(([k, d]) => (
          <tr key={k}>
            <th scope="row">{k}</th>
            <td>{d}</td>
            <td className="num">
              <span className="ok">
                la zi
                <ICheck size={13} />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Total</th>
          <td>controale acoperite</td>
          <td className="num">
            <span className="ok">5 / 5</span>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default function Hero() {
  const c = hero.contract;
  return (
    <section className="hero" id="top">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <h1 className="hero-title">
            Contabilitate până la bilanț + Control ANAF și ITM. <em>Legal</em>, cu{" "}
            <span className="hl">CIM de economist</span> la firma ta și mentenanță 24/7
          </h1>

          <div className="hero-cta">
            <a className="btn btn-primary btn-lg" href={WA_MAIN} target="_blank" rel="noopener">
              {hero.cta} <IArrow size={18} />
            </a>
            <span className="reply">
              <IClock size={14} /> {hero.reply}
            </span>
          </div>

        </div>

        <div className="hero-stage">
          <HeroScene />
          <p className="stage-caption">Apasă tastele. Aparatul adună.</p>
          <dl className="sr-only">
            {hero.stats.map((s) => (
              <div key={s.k}>
                <dt>{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="wrap hero-after">
        <div className="hero-lede">
            <p>{hero.intro}</p>
            <ul className="plain-list">
              <li>
                <strong>Contabilitatea</strong> o țin eu personal până la balanță și bilanț, fiind{" "}
                <strong>angajat cu CIM part-time ca economist la firma ta</strong> conform Art.10 alin.(1) Legea
                82/1991. Semnez bilanțul ca economistul tău intern.
              </li>
              <li>
                <strong>Plata:</strong> consultanță pe contract prestări servicii (firma mea CAEN 7022) + salariu CIM
                economist (2-4h/lună) prin Revisal. Totul facturat și declarat.
              </li>
            </ul>
          </div>

          <ul className="legal-tags">
            {hero.badges.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        <Ledger />
      </div>

      <div className="wrap hero-contract-wrap">
        <p className="social-line">{hero.social}</p>

        <Reveal>
          <article className="contract">
            <header className="contract-head">
              <span>{c.title}</span>
              <span className="mono-tag">{c.status}</span>
            </header>

            <div className="contract-body">
              <div className="contract-doc">
                <div className="doc-title">
                  <span>{c.doc}</span>
                  <span className="mono-tag">{c.docStatus}</span>
                </div>
                <dl className="doc-fields">
                  {c.fields.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="doc-sign">
                  <IShield size={14} /> {c.sign}
                </p>
              </div>

              <ol className="checklist">
                {c.checklist.map((it) => (
                  <li key={it.label} className={it.done ? "done" : it.active ? "active" : ""}>
                    <span className="check-dot">{it.done ? <ICheck size={12} /> : null}</span>
                    <span>{it.label}</span>
                    {it.active && <span className="mono-tag tag-signal">INCLUS PREMIUM</span>}
                  </li>
                ))}
              </ol>
            </div>

            <footer className="contract-foot">
              <div>
                <b>{c.pay.title}</b>
                <span>{c.pay.text}</span>
              </div>
              <div>
                <b>{c.resp.title}</b>
                <span>{c.resp.text}</span>
              </div>
            </footer>
          </article>
        </Reveal>

        <figure className="hero-quote">
          <blockquote>
            <p>{c.quote}</p>
            <figcaption>{c.quoteBy}</figcaption>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
