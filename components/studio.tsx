"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

function mkCanvas(w: number, h: number) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return { c, g: c.getContext("2d")! };
}

/** Studio fals, desenat: softbox sus-stânga, umplere rece din dreapta, margine din spate, birou luminos jos. */
function studioTexture() {
  const W = 1024;
  const H = 512;
  const { c, g } = mkCanvas(W, H);
  const sky = g.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, "#9aa39c");
  sky.addColorStop(0.5, "#5d6661");
  sky.addColorStop(1, "#c9cdc3");
  g.fillStyle = sky;
  g.fillRect(0, 0, W, H);
  const box = (x: number, y: number, w: number, h: number, color: string, blur: number) => {
    g.save();
    g.filter = `blur(${blur}px)`;
    g.fillStyle = color;
    g.fillRect(x, y, w, h);
    g.restore();
  };
  box(150, 40, 300, 150, "#ffffff", 14); // softbox principal
  box(700, 110, 150, 120, "#e6f3ee", 18); // umplere rece
  box(0, 200, W, 30, "#ffffff", 20); // linie de horizont luminoasă
  box(440, 20, 140, 60, "#f7f7f0", 10); // rim de sus
  const t = new THREE.CanvasTexture(c);
  t.mapping = THREE.EquirectangularReflectionMapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function StudioLight() {
  const { gl, scene } = useThree();
  useEffect(() => {
    const src = studioTexture();
    const pmrem = new THREE.PMREMGenerator(gl);
    const rt = pmrem.fromEquirectangular(src);
    const prev = scene.environment;
    scene.environment = rt.texture;
    scene.environmentIntensity = 1.05;
    src.dispose();
    pmrem.dispose();
    return () => {
      scene.environment = prev;
      rt.dispose();
    };
  }, [gl, scene]);
  return <directionalLight position={[-3, 6, 4]} intensity={0.9} color="#fffdf6" />;
}

