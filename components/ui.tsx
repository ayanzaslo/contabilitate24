"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Intrare în scenă: opacitate + glisare scurtă (fără straturi 3D, ca să rămână fluid). */
export function Reveal({
  children,
  delay = 0,
  y = 14,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const M = motion[as];

  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0, transitionEnd: { transform: "none" } }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </M>
  );
}

/* ——— Iconițe inline ——— */
type P = { size?: number; className?: string };
const base = (size = 16) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const IPhone = ({ size, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
export const IWhatsapp = ({ size, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3 21l1.6-4.9A8.5 8.5 0 1 1 8 19.5L3 21z" />
    <path d="M9 9.5c.3 2 2.5 4.3 5 5l1.3-1.2-1.8-1-.9.6c-.7-.3-1.4-1-1.7-1.7l.6-.9-1-1.8L9 9.5z" />
  </svg>
);
export const IMail = ({ size, className }: P) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
export const IArrow = ({ size, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ICheck = ({ size, className }: P) => (
  <svg {...base(size)} strokeWidth={3} className={className}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);
export const IPin = ({ size, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
export const IClock = ({ size, className }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const IShield = ({ size, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    <path d="M8.5 12l2.5 2.5L15.5 10" />
  </svg>
);
export const IPlus = ({ size, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const IStar = ({ size, className }: P) => (
  <svg width={size ?? 16} height={size ?? 16} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 2l3 6.9 7.5.7-5.7 5 1.8 7.4L12 18l-6.6 4 1.8-7.4-5.7-5 7.5-.7L12 2z" />
  </svg>
);

export const IX = ({ size, className }: P) => (
  <svg {...base(size)} strokeWidth={2.5} className={className}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const IBolt = ({ size, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);
export const IMenu = ({ size, className }: P) => (
  <svg {...base(size)} strokeWidth={2.2} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
