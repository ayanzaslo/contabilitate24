"use client";

import { useState } from "react";
import { estimate, pricing, WA_MAIN } from "@/lib/content";
import { IArrow, ICheck } from "./ui";

type Form = { forma: string; angajati: string; tva: string; domeniu: string };

const money = (n: number) => n.toLocaleString("ro-RO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Calculator() {
  const c = pricing.calc;
  const [open, setOpen] = useState(false);
  const [f, setF] = useState<Form>({ forma: "SRL", angajati: "0", tva: "Nu", domeniu: "Servicii" });
  const [res, setRes] = useState<{ min: number; max: number } | null>(null);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  return (
    <div className="calc-wrap">
      <div className="cta-row">
        <a className="btn btn-primary btn-lg" href={WA_MAIN} target="_blank" rel="noopener">
          {pricing.next.cta} <IArrow size={18} />
        </a>
        <button type="button" className="btn btn-ghost btn-lg" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
          <ICheck size={16} /> {pricing.next.calc}
        </button>
      </div>

      {open && (
        <div className="calc" role="region" aria-label={c.title}>
          <div className="calc-head">
            <div>
              <b>{c.title}</b>
              <span>{c.sub}</span>
            </div>
            <button type="button" className="calc-close" onClick={() => setOpen(false)}>
              {c.close}
            </button>
          </div>

          <div className="calc-grid">
            <label>
              <span>Forma juridică</span>
              <select value={f.forma} onChange={set("forma")}>
                {c.forma.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Număr angajați</span>
              <select value={f.angajati} onChange={set("angajati")}>
                {c.angajati.map(([v, l]) => (
                  <option key={v} value={v}>
                    {l}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Plătitor TVA?</span>
              <select value={f.tva} onChange={set("tva")}>
                {c.tva.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Domeniu activitate</span>
              <select value={f.domeniu} onChange={set("domeniu")}>
                {c.domeniu.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="calc-run">
            <button type="button" className="btn btn-primary" onClick={() => setRes(estimate(f))}>
              {c.run} <IArrow size={16} />
            </button>
            <span>{c.note}</span>
          </div>

          {res && (
            <div className="calc-res" aria-live="polite">
              <div className="calc-lcd">
                <small>{c.resultPrefix}</small>
                <strong>
                  <span>{money(res.min)}</span>
                  <i>{c.resultAnd}</i>
                  <span>{money(res.max)}</span>
                </strong>
                <small>{c.resultSuffix}</small>
              </div>
              <p>{c.fine}</p>
              <a className="btn btn-primary" href={WA_MAIN} target="_blank" rel="noopener">
                {c.lock}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
