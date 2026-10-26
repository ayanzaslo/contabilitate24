"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

/**
 * Animații GSAP: titlul din hero se așază cuvânt cu cuvânt, titlurile de secțiune
 * se ridică la derulare, iar rândurile din tabelul „la zi” apar ca tipărite pe bandă.
 * Nu randează nimic; lucrează pe elementele deja din pagină.
 */
export default function GsapFx() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const hero = document.querySelector<HTMLElement>(".hero-title");
      if (hero) {
        const split = SplitText.create(hero, { type: "words", mask: "words", autoSplit: true });
        gsap.from(split.words, { yPercent: 110, duration: 0.8, ease: "power3.out", stagger: 0.045, delay: 0.15 });
      }

      document.querySelectorAll<HTMLElement>(".sec .h2").forEach((el) => {
        const split = SplitText.create(el, { type: "words", mask: "words" });
        gsap.from(split.words, {
          yPercent: 110,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.04,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      const rows = document.querySelectorAll<HTMLElement>(".ledger tbody tr");
      if (rows.length) {
        gsap.from(rows, {
          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.14,
          scrollTrigger: { trigger: ".ledger", start: "top 80%", once: true },
        });
      }
    });

    return () => mm.revert();
  });

  return null;
}
