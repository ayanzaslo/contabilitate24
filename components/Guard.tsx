import { guard as g } from "@/lib/content";
import { ClockScene } from "./Scenes";
import { IClock, IShield, Reveal } from "./ui";

export default function Guard() {
  return (
    <section className="sec sec-night" id="garda">
      <div className="wrap guard-grid">
        <div className="guard-copy">
          <h2 className="h2">{g.title}</h2>
          <div className="prose">
            <p>{g.p1}</p>
            <p>
              <strong>{g.p2a}</strong>
              {g.p2b}
            </p>
            <p>{g.p3}</p>
          </div>

          <div className="program">
            <IClock size={18} />
            <p>
              <b>{g.program.a}</b>
              {g.program.at}
              <b className="signal">{g.program.b}</b>
              {g.program.bt}
            </p>
          </div>
        </div>

        <div className="guard-stage">
          <ClockScene />
          <p className="legend">
            <span><i className="lg lg-n" /> 9-18 program public</span>
            <span><i className="lg lg-g" /> gardă urgențe</span>
            <span><i className="lg lg-r" /> incident rezolvat</span>
          </p>
        </div>
      </div>

      <div className="wrap">
        <ul className="incidents">
          {g.incidents.map(([when, what, res], i) => (
            <Reveal as="li" key={when} delay={i * 0.08} className="incident">
              <span className="when">{when}</span>
              <b>{what}</b>
              <p>
                <IShield size={15} />
                {res}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
