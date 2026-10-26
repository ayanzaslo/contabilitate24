"use client";

import { useEffect, useState } from "react";
import { company, nav, people } from "@/lib/content";
import { IMenu, IWhatsapp, IX } from "./ui";

const MAIN = ["#model", "#pret", "#servicii", "#garda", "#contact"];

export default function Header() {
  const { nicolae, loredana } = people;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="navbar">
        <div className="wrap navbar-in">
          <a href="#top" className="brand" aria-label={company.name} onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo" src="/CSH-simbol.svg" alt="" width={48} height={48} />
            <span className="brand-text">
              <strong>C.S.H. Business SRL</strong>
              <small>Servicii de contabilitate</small>
            </span>
          </a>

          <nav className="nav" aria-label="Navigație principală">
            {nav.filter((n) => MAIN.includes(n.href)).map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-sm btn-wa" href={nicolae.wa} target="_blank" rel="noopener">
              <IWhatsapp size={15} /> WhatsApp
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Închide meniul" : "Deschide meniul"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <IX size={22} /> : <IMenu size={22} />}
            </button>
          </div>
        </div>

        <div id="mobile-menu" className="mobile-menu" data-open={open}>
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a className="btn btn-wa btn-lg" href={nicolae.wa} target="_blank" rel="noopener">
            <IWhatsapp size={18} /> WhatsApp {nicolae.short}
          </a>
          <a className="btn btn-ghost btn-lg" href={loredana.wa} target="_blank" rel="noopener">
            <IWhatsapp size={18} /> WhatsApp {loredana.short}
          </a>
        </div>
      </div>
    </header>
  );
}
