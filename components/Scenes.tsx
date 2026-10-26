"use client";

import dynamic from "next/dynamic";

export const HeroScene = dynamic(() => import("./CalcScene"), {
  ssr: false,
  loading: () => <div className="scene scene-calc scene-loading" aria-hidden />,
});

export const ClockScene = dynamic(() => import("./ClockScene"), {
  ssr: false,
  loading: () => <div className="scene scene-clock scene-loading" aria-hidden />,
});
