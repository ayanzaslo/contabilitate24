"use client";

import { useState } from "react";
import { faq, WA_MAIN } from "@/lib/content";
import { IWhatsapp } from "./ui";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="sec sec-desk" id="faq">
      <div className="wrap faq-grid">
        <div className="faq-side">
          <h2 className="h2">{faq.title}</h2>
          <p className="lead">{faq.lead}</p>
          <a className="btn btn-wa" href={WA_MAIN} target="_blank" rel="noopener">
            <IWhatsapp size={16} /> {faq.cta}
          </a>
        </div>

        <div className="faq-list">
          {faq.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className={`faq-item ${isOpen ? "open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="faq-q">{it.q}</span>
                    <span className="mini-toggle" aria-hidden>
                      <i />
                    </span>
                  </button>
                </h3>
                <div className="faq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div>
                    <p>{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
