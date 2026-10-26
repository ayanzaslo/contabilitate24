"use client";

import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { sceneFonts, type SceneFonts } from "./sceneFonts";
import { StudioLight } from "./studio";

/**
 * Mașina de adunat cu rolă: calculator de birou cu hârtie termică.
 * Tastele se apasă (și la click), LCD-ul arată cifra curentă, iar rola tipărește banda
 * cu ce face firma, apoi adună orice tastează vizitatorul.
 */

/* ——— paleta obiectului ——— */
const BODY = "#25292b";
const KEY_LIGHT = "#d9dbd3";
const KEY_DARK = "#33383a";
const KEY_GREEN = "#c8561e";
const LEGEND_DARK = "#1b1f20";
const LEGEND_LIGHT = "#f2f4ee";
const PAPER = "#fbfbf6";
const INK = "#1d1f1c";
const LCD_BG = "#b9c9a2";
const LCD_INK = "#1f2d1a";

/* ——— banda ——— */
const TW = 512;
const LH = 46;
const ROWS = 18;
const TH = (ROWS + 2) * LH;
const TAPE_W = 2.0;

type Line = { l?: string; r?: string; kind: "text" | "num" | "rule" | "total" | "gap" | "head" };

const DEMO: { line: Line; lcd: string }[] = [
  { line: { kind: "head", l: "C.S.H. BUSINESS SRL" }, lcd: "0" },
  { line: { kind: "rule" }, lcd: "0" },
  { line: { kind: "text", l: "ÎNFIINȚARE", r: "<72h" }, lcd: "72" },
  { line: { kind: "text", l: "CIM ECONOMIST", r: "2-4h/lună" }, lcd: "4" },
  { line: { kind: "text", l: "CONTROL ANAF", r: "la zi" }, lcd: "1" },
  { line: { kind: "text", l: "CONTROL ITM", r: "la zi" }, lcd: "1" },
  { line: { kind: "text", l: "SPV / e-FACTURĂ", r: "la zi" }, lcd: "1" },
  { line: { kind: "text", l: "GARDĂ", r: "24/7" }, lcd: "24" },
  { line: { kind: "total", l: "DIFERENȚĂ", r: "0,00" }, lcd: "0,00" },
];

const fmt = (n: number) =>
  n.toLocaleString("ro-RO", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const entryNum = (s: string) => (s ? parseFloat(s.replace(",", ".")) || 0 : 0);

/* ——— texturi desenate procedural ——— */
function mkCanvas(w: number, h: number) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return { c, g: c.getContext("2d")! };
}

function grainBump() {
  const { c, g } = mkCanvas(128, 128);
  const img = g.createImageData(128, 128);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 128 + (Math.random() - 0.5) * 70;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(5, 5);
  return t;
}

function shadowTexture() {
  // alphaMap: alb = umbră plină, negru = transparent
  const { c, g } = mkCanvas(256, 340);
  g.fillStyle = "#000";
  g.fillRect(0, 0, 256, 340);
  g.filter = "blur(20px)";
  g.fillStyle = "rgba(255,255,255,0.55)";
  g.beginPath();
  g.roundRect(62, 70, 132, 200, 16);
  g.fill();
  g.filter = "blur(7px)";
  g.fillStyle = "rgba(255,255,255,0.5)";
  g.beginPath();
  g.roundRect(78, 90, 100, 162, 10);
  g.fill();
  return new THREE.CanvasTexture(c);
}

function legendTexture(text: string, font: string, color: string, size: number) {
  const { c, g } = mkCanvas(160, 128);
  g.fillStyle = color;
  g.font = `700 ${size}px ${font}`;
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(text, 80, 68);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function rollEndTexture() {
  const { c, g } = mkCanvas(256, 256);
  g.fillStyle = "#e9e9e1";
  g.fillRect(0, 0, 256, 256);
  for (let r = 118; r > 22; r -= 2.6) {
    g.strokeStyle = `rgba(60,60,50,${0.1 + Math.random() * 0.1})`;
    g.lineWidth = 1;
    g.beginPath();
    g.arc(128, 128, r, 0, Math.PI * 2);
    g.stroke();
  }
  g.fillStyle = "#8e8f86";
  g.beginPath();
  g.arc(128, 128, 20, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#26292a";
  g.beginPath();
  g.arc(128, 128, 9, 0, Math.PI * 2);
  g.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Desenează banda: rândul 0 e marginea albă din fața fantei, 1 = cea mai nouă linie. */
function drawTape(g: CanvasRenderingContext2D, lines: Line[], f: SceneFonts) {
  g.clearRect(0, 0, TW, TH);
  const count = Math.min(lines.length, ROWS - 1);
  const topRow = count + 1; // ultimul rând ocupat de hârtie
  const yTop = TH - (topRow + 1) * LH;

  // hârtia, cu capătul smuls în zigzag
  g.fillStyle = PAPER;
  g.beginPath();
  g.moveTo(0, TH);
  g.lineTo(0, yTop + 6);
  for (let x = 0; x <= TW; x += 16) g.lineTo(x, yTop + (((x / 16) | 0) % 2 ? 0 : 9));
  g.lineTo(TW, TH);
  g.closePath();
  g.fill();
  // umbră fină pe margini (hârtia e ușor curbată)
  const edge = g.createLinearGradient(0, 0, TW, 0);
  edge.addColorStop(0, "rgba(40,40,30,.14)");
  edge.addColorStop(0.08, "rgba(40,40,30,0)");
  edge.addColorStop(0.92, "rgba(40,40,30,0)");
  edge.addColorStop(1, "rgba(40,40,30,.14)");
  g.fillStyle = edge;
  g.fillRect(0, yTop, TW, TH - yTop);

  g.textBaseline = "middle";
  const pad = 30;
  for (let i = 0; i < count; i++) {
    const ln = lines[lines.length - 1 - i];
    const row = i + 1;
    const cy = TH - (row + 1) * LH + LH / 2 + 2;
    g.fillStyle = INK;
    g.globalAlpha = 0.92;
    if (ln.kind === "rule") {
      g.fillRect(pad, cy, TW - pad * 2, 2);
    } else if (ln.kind === "head") {
      g.textAlign = "center";
      g.font = `700 25px ${f.display}`;
      g.fillText(ln.l ?? "", TW / 2, cy);
    } else if (ln.kind === "total") {
      g.fillRect(pad, cy - 17, TW - pad * 2, 2);
      g.textAlign = "left";
      g.font = `700 21px ${f.mono}`;
      g.fillText(ln.l ?? "", pad, cy + 2);
      g.textAlign = "right";
      g.fillText(`${ln.r ?? ""} ✓`, TW - pad, cy + 2);
      g.fillRect(pad, cy + 15, TW - pad * 2, 2);
      g.fillRect(pad, cy + 19, TW - pad * 2, 2);
    } else if (ln.kind === "num") {
      g.textAlign = "right";
      g.font = `500 22px ${f.mono}`;
      g.fillText(ln.r ?? "", TW - pad - 34, cy);
      g.textAlign = "left";
      g.fillText(ln.l ?? "", TW - pad - 22, cy);
    } else if (ln.kind === "text") {
      g.textAlign = "left";
      g.font = `500 20px ${f.mono}`;
      g.fillText(ln.l ?? "", pad, cy);
      g.textAlign = "right";
      g.fillText(ln.r ?? "", TW - pad, cy);
      // puncte de conducere între etichetă și valoare
      const lw = g.measureText(ln.l ?? "").width;
      g.textAlign = "left";
      const rw = g.measureText(ln.r ?? "").width;
      g.globalAlpha = 0.4;
      for (let x = pad + lw + 10; x < TW - pad - rw - 10; x += 9) g.fillRect(x, cy + 6, 2, 2);
    }
    g.globalAlpha = 1;
  }
}

function drawLcd(g: CanvasRenderingContext2D, text: string, f: SceneFonts, memo: boolean) {
  const W = 640;
  const H = 150;
  g.fillStyle = LCD_BG;
  g.fillRect(0, 0, W, H);
  const grd = g.createLinearGradient(0, 0, 0, H);
  grd.addColorStop(0, "rgba(255,255,255,.22)");
  grd.addColorStop(0.5, "rgba(255,255,255,0)");
  grd.addColorStop(1, "rgba(0,0,0,.1)");
  g.fillStyle = grd;
  g.fillRect(0, 0, W, H);

  g.textBaseline = "middle";
  g.textAlign = "right";
  g.font = `500 78px ${f.mono}`;
  g.fillStyle = LCD_INK;
  g.globalAlpha = 0.09;
  g.fillText("88888888", W - 28, 86);
  g.globalAlpha = 0.92;
  g.fillText(text.slice(-8), W - 28, 86);
  g.globalAlpha = 0.75;
  g.font = `600 20px ${f.mono}`;
  g.textAlign = "left";
  g.fillText(memo ? "M  ▲  Σ" : "▲  Σ", 26, 30);
  g.globalAlpha = 1;
}

/* ——— profilul carcasei (z, y), colțuri rotunjite ——— */
function roundedShape(pts: [number, number][], r: number) {
  const s = new THREE.Shape();
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i + n - 1) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const v1 = new THREE.Vector2(p0[0] - p1[0], p0[1] - p1[1]);
    const v2 = new THREE.Vector2(p2[0] - p1[0], p2[1] - p1[1]);
    const rr = Math.min(r, v1.length() / 2, v2.length() / 2);
    v1.normalize();
    v2.normalize();
    const a = [p1[0] + v1.x * rr, p1[1] + v1.y * rr];
    const b = [p1[0] + v2.x * rr, p1[1] + v2.y * rr];
    if (i === 0) s.moveTo(a[0], a[1]);
    else s.lineTo(a[0], a[1]);
    s.quadraticCurveTo(p1[0], p1[1], b[0], b[1]);
  }
  s.closePath();
  return s;
}

const SLOPE = 0.1267; // înclinarea plăcii cu taste
const keyY = (z: number) => 0.36 + (2.6 - z) * SLOPE;

type KeyDef = { id: string; label: string; kind: "num" | "op" | "eq" | "clr"; col: number; row: number };
const KEYS: KeyDef[] = [
  ...["7", "8", "9"].map((l, i): KeyDef => ({ id: l, label: l, kind: "num", col: i, row: 0 })),
  { id: "C", label: "C", kind: "clr", col: 3, row: 0 },
  ...["4", "5", "6"].map((l, i): KeyDef => ({ id: l, label: l, kind: "num", col: i, row: 1 })),
  { id: "-", label: "−", kind: "op", col: 3, row: 1 },
  ...["1", "2", "3"].map((l, i): KeyDef => ({ id: l, label: l, kind: "num", col: i, row: 2 })),
  { id: "+", label: "+", kind: "op", col: 3, row: 2 },
  { id: "0", label: "0", kind: "num", col: 0, row: 3 },
  { id: "00", label: "00", kind: "num", col: 1, row: 3 },
  { id: ".", label: ",", kind: "num", col: 2, row: 3 },
  { id: "=", label: "=", kind: "eq", col: 3, row: 3 },
];

type Store = {
  entry: string;
  total: number;
  lines: Line[];
  lcd: string;
  tapeDirty: boolean;
  lcdDirty: boolean;
  feed: number;
  press: Record<string, number>;
  demoStep: number;
  nextAt: number;
};

function Machine({ fonts, reduce }: { fonts: SceneFonts; reduce: boolean }) {
  const { size, clock } = useThree();
  const root = useRef<THREE.Group>(null);
  const keyRefs = useRef<Record<string, THREE.Group | null>>({});
  const pointer = useRef({ x: 0, y: 0 });
  const tapeMesh = useRef<THREE.Mesh>(null);
  const store = useRef<Store>({
    entry: "",
    total: 0,
    lines: [],
    lcd: "0",
    tapeDirty: true,
    lcdDirty: true,
    feed: 0,
    press: {},
    demoStep: 0,
    nextAt: 1.1,
  });

  const grain = useMemo(grainBump, []);
  const rollEnd = useMemo(rollEndTexture, []);
  const shade = useMemo(shadowTexture, []);

  const tape = useMemo(() => {
    const { c, g } = mkCanvas(TW, TH);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    return { c, g, tex };
  }, []);

  const lcd = useMemo(() => {
    const { c, g } = mkCanvas(640, 150);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return { c, g, tex };
  }, []);

  const legends = useMemo(() => {
    const out: Record<string, THREE.CanvasTexture> = {};
    for (const k of KEYS) {
      const color = k.kind === "num" ? LEGEND_DARK : k.kind === "eq" ? LEGEND_DARK : LEGEND_LIGHT;
      out[k.id] = legendTexture(k.label, fonts.display, color, k.label.length > 1 && k.id !== "C" ? 62 : 84);
    }
    return out;
  }, [fonts]);

  const decal = useMemo(() => {
    const { c, g } = mkCanvas(512, 96);
    g.fillStyle = "rgba(255,255,255,.55)";
    g.font = `800 56px ${fonts.display}`;
    g.textBaseline = "middle";
    g.textAlign = "left";
    g.fillText("C.S.H.", 8, 50);
    g.font = `600 30px ${fonts.mono}`;
    g.fillText("CONTABILITATE 24/7", 200, 54);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, [fonts]);

  useEffect(
    () => () => {
      [grain, rollEnd, shade, tape.tex, lcd.tex, decal, ...Object.values(legends)].forEach((t) => t.dispose());
    },
    [grain, rollEnd, shade, tape, lcd, decal, legends],
  );

  /* carcasa */
  const bodyGeo = useMemo(() => {
    const shape = roundedShape(
      [
        [-2.55, 0.05],
        [2.55, 0.05],
        [2.55, 0.34],
        [-0.55, 0.74],
        [-0.5, 1.2],
        [-2.55, 1.0],
      ],
      0.14,
    );
    const g = new THREE.ExtrudeGeometry(shape, {
      depth: 3.05,
      bevelEnabled: true,
      bevelThickness: 0.07,
      bevelSize: 0.07,
      bevelSegments: 5,
      curveSegments: 10,
    });
    g.translate(0, 0, -1.525);
    return g;
  }, []);

  /* banda: panglică pe o curbă, cu fâlfâire ușoară */
  const ribbon = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.08, -1.5),
      new THREE.Vector3(0, 1.9, -1.58),
      new THREE.Vector3(0, 2.9, -1.4),
      new THREE.Vector3(0, 3.72, -0.92),
      new THREE.Vector3(0, 4.12, -0.32),
    ]);
    const LS = 72;
    const WS = 8;
    const pos = new Float32Array((LS + 1) * (WS + 1) * 3);
    const uv = new Float32Array((LS + 1) * (WS + 1) * 2);
    const idx: number[] = [];
    const vMax = (ROWS * LH) / TH;
    for (let i = 0; i <= LS; i++) {
      for (let j = 0; j <= WS; j++) {
        const k = i * (WS + 1) + j;
        uv[k * 2] = j / WS;
        uv[k * 2 + 1] = (i / LS) * vMax;
        if (i < LS && j < WS) {
          const a = k;
          const b = k + 1;
          const c = k + WS + 1;
          const d = c + 1;
          idx.push(a, b, c, b, d, c);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    geo.setIndex(idx);
    return { curve, geo, LS, WS };
  }, []);

  const print = (line: Line, lcdText?: string) => {
    const s = store.current;
    s.lines.push(line);
    if (s.lines.length > 60) s.lines.shift();
    s.tapeDirty = true;
    s.feed = reduce ? 0 : 1;
    if (lcdText !== undefined) {
      s.lcd = lcdText;
      s.lcdDirty = true;
    }
  };

  const pressKey = (k: KeyDef, time: number, fromDemo = false) => {
    const s = store.current;
    s.press[k.id] = time + 0.16;
    if (fromDemo) return;
    // un click al vizitatorului oprește demonstrația și lasă banda să fie a lui
    s.demoStep = DEMO.length;
    const cur = entryNum(s.entry);
    if (k.kind === "num") {
      if (k.id === "." && s.entry.includes(".")) return;
      if (s.entry.replace(".", "").length >= 9) return;
      s.entry = (k.id === "." && !s.entry ? "0" : s.entry) + k.id;
      s.lcd = s.entry.replace(".", ",");
      s.lcdDirty = true;
    } else if (k.id === "+" || k.id === "-") {
      if (!s.entry) return;
      s.total += k.id === "+" ? cur : -cur;
      print({ kind: "num", l: k.id === "+" ? "+" : "−", r: fmt(cur) }, fmt(s.total).replace(/\./g, ""));
      s.entry = "";
    } else if (k.id === "=") {
      if (s.entry) {
        s.total += cur;
        print({ kind: "num", l: "+", r: fmt(cur) });
      }
      print({ kind: "total", l: "TOTAL", r: fmt(s.total) }, fmt(s.total).replace(/\./g, ""));
      s.entry = "";
      s.total = 0;
    } else if (k.id === "C") {
      if (!s.entry) s.total = 0;
      s.entry = "";
      s.lcd = "0";
      s.lcdDirty = true;
    }
  };

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const s = store.current;

    /* demonstrație: apasă „+” și tipărește rând cu rând */
    if (s.demoStep < DEMO.length) {
      if (reduce) {
        for (const d of DEMO) print(d.line, d.lcd);
        s.demoStep = DEMO.length;
      } else if (t > s.nextAt) {
        const d = DEMO[s.demoStep++];
        s.press["+"] = t + 0.16;
        print(d.line, d.lcd);
        s.nextAt = t + (s.demoStep === DEMO.length - 1 ? 1.15 : 0.82);
      }
    }

    /* redesenări doar când s-a schimbat ceva */
    if (s.tapeDirty) {
      drawTape(tape.g, s.lines, fonts);
      tape.tex.needsUpdate = true;
      s.tapeDirty = false;
    }
    if (s.lcdDirty) {
      drawLcd(lcd.g, s.lcd, fonts, s.total !== 0);
      lcd.tex.needsUpdate = true;
      s.lcdDirty = false;
    }

    /* avans de hârtie: ușor accelerat la început, frânat la capăt */
    s.feed = Math.max(0, s.feed - dt / 0.38);
    const e = 1 - Math.pow(1 - s.feed, 3);
    tape.tex.offset.y = (e * LH) / TH;

    /* panglica */
    const { curve, geo, LS, WS } = ribbon;
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const P = new THREE.Vector3();
    const T = new THREE.Vector3();
    for (let i = 0; i <= LS; i++) {
      const sN = i / LS;
      curve.getPointAt(sN, P);
      curve.getTangentAt(sN, T);
      const sway = sN * sN;
      P.x += Math.sin(t * 1.1 + sN * 4) * 0.035 * sway;
      P.z += Math.sin(t * 0.8 + sN * 3) * 0.03 * sway;
      const nrm = new THREE.Vector3(0, -T.z, T.y).normalize();
      for (let j = 0; j <= WS; j++) {
        const u = j / WS - 0.5;
        const curl = u * u * 0.34 * (0.4 + sN * 0.6);
        pos.setXYZ(
          i * (WS + 1) + j,
          P.x + u * TAPE_W,
          P.y + nrm.y * curl,
          P.z + nrm.z * curl,
        );
      }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();

    /* tastele: apăsate = coboară și revin elastic */
    for (const k of KEYS) {
      const g = keyRefs.current[k.id];
      if (!g) continue;
      const until = s.press[k.id] ?? 0;
      const target = t < until ? -0.075 : 0;
      g.position.y += (target - g.position.y) * Math.min(dt * 28, 1);
    }

    /* aparatul urmărește ușor cursorul */
    pointer.current.x += (state.pointer.x - pointer.current.x) * Math.min(dt * 2.4, 1);
    pointer.current.y += (state.pointer.y - pointer.current.y) * Math.min(dt * 2.4, 1);
    const r = root.current;
    if (r) {
      const fit = THREE.MathUtils.clamp(Math.min(size.width / 560, size.height / 560), 0.45, 1.15);
      r.scale.setScalar(fit);
      r.rotation.y = -0.46 + pointer.current.x * 0.22 + Math.sin(t * 0.25) * 0.015;
      r.rotation.x = pointer.current.y * 0.05;
    }
  });

  const onKey = (k: KeyDef) => (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    pressKey(k, clock.elapsedTime, false);
  };

  const bodyMat = (
    <meshStandardMaterial
      color={BODY}
      roughness={0.52}
      metalness={0}
    />
  );

  // coordonatele grilei de taste pe planul înclinat
  const colX = (c: number) => (c - 1.5) * 0.72;
  const rowZ = (r: number) => 0.12 + r * 0.66;

  return (
    <group ref={root} position={[0, 0, 0]}>
      {/* umbra de contact pe birou */}
      <mesh position={[0.1, 0.004, 0.15]} rotation={[-Math.PI / 2, 0, 0]} renderOrder={-1}>
        <planeGeometry args={[7.2, 9.6]} />
        <meshBasicMaterial color="#121a16" alphaMap={shade} transparent opacity={0.9} depthWrite={false} toneMapped={false} />
      </mesh>

      {/* carcasa (profil extrudat, bordurat) */}
      <mesh geometry={bodyGeo} rotation={[0, -Math.PI / 2, 0]} position={[0, 0.0, 0]} castShadow>
        {bodyMat}
      </mesh>

      {/* picioare de cauciuc */}
      {[
        [-1.35, -2.25],
        [1.35, -2.25],
        [-1.35, 2.2],
        [1.35, 2.2],
      ].map(([x, z]) => (
        <mesh key={`${x}${z}`} position={[x, 0.02, z]}>
          <cylinderGeometry args={[0.16, 0.18, 0.1, 20]} />
          <meshStandardMaterial color="#101213" roughness={0.9} />
        </mesh>
      ))}

      {/* placă cu taste: ușor mai deschisă, scufundată în carcasă */}
      <group position={[0, keyY(1.2) + 0.015, 1.2]} rotation={[SLOPE, 0, 0]}>
        <RoundedBox args={[3.1, 0.06, 3.1]} radius={0.03} smoothness={3}>
          <meshStandardMaterial color="#181b1c" roughness={0.7} />
        </RoundedBox>
      </group>

      {/* taste */}
      {KEYS.map((k) => {
        const z = rowZ(k.row);
        const color = k.kind === "num" ? KEY_LIGHT : k.kind === "eq" ? KEY_GREEN : KEY_DARK;
        return (
          <group key={k.id} position={[colX(k.col), keyY(z), z]} rotation={[SLOPE, 0, 0]}>
            <group
              ref={(g) => {
                keyRefs.current[k.id] = g;
              }}
              onPointerDown={onKey(k)}
              onPointerOver={() => (document.body.style.cursor = "pointer")}
              onPointerOut={() => (document.body.style.cursor = "")}
            >
              <RoundedBox args={[0.58, 0.2, 0.5]} radius={0.06} smoothness={3} position={[0, 0.1, 0]}>
                <meshStandardMaterial
                  color={color}
                  roughness={0.4}
                />
              </RoundedBox>
              <mesh position={[0, 0.204, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.42, 0.34]} />
                <meshBasicMaterial map={legends[k.id]} transparent toneMapped={false} />
              </mesh>
            </group>
          </group>
        );
      })}

      {/* ecranul LCD, în rama lui */}
      <group position={[0, 1.2, -0.52]} rotation={[-0.62, 0, 0]}>
        <RoundedBox args={[2.62, 0.14, 0.8]} radius={0.05} smoothness={3} position={[0, 0.02, -0.02]}>
          <meshStandardMaterial color="#14171a" roughness={0.35} />
        </RoundedBox>
        <mesh position={[0, 0.098, -0.02]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.34, 0.55]} />
          <meshStandardMaterial
            map={lcd.tex}
            emissiveMap={lcd.tex}
            emissive="#ffffff"
            emissiveIntensity={0.28}
            roughness={0.25}
            metalness={0}
          />
        </mesh>
        {/* sticlă peste LCD: reflexie fină */}
        <mesh position={[0, 0.1, -0.02]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.34, 0.55]} />
          <meshStandardMaterial transparent opacity={0.1} roughness={0.05} color="#ffffff" />
        </mesh>
      </group>

      {/* etichetă pe carcasă */}
      <mesh position={[0.05, keyY(-0.25) + 0.012, -0.28]} rotation={[-Math.PI / 2 + SLOPE, 0, 0]}>
        <planeGeometry args={[2.3, 0.32]} />
        <meshBasicMaterial map={decal} transparent toneMapped={false} opacity={0.5} />
      </mesh>

      {/* fanta de hârtie */}
      <mesh position={[0, 1.07, -1.5]}>
        <boxGeometry args={[2.3, 0.05, 0.14]} />
        <meshStandardMaterial color="#0c0d0e" roughness={0.8} />
      </mesh>
      {/* bara de rupere zimțată */}
      <mesh position={[0, 1.12, -1.38]}>
        <boxGeometry args={[2.34, 0.05, 0.05]} />
        <meshStandardMaterial color="#b9bcb8" roughness={0.35} metalness={0.8} />
      </mesh>

      {/* rola de hârtie în suportul ei */}
      <group position={[0, 1.55, -2.22]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.5, 0.5, 2.0, 48, 1, true]} />
          <meshStandardMaterial color={PAPER} roughness={0.85} emissive="#ffffff" emissiveIntensity={0.1} />
        </mesh>
        {[-1.0, 1.0].map((x) => (
          <mesh key={x} position={[x, 0, 0]} rotation={[0, x > 0 ? Math.PI / 2 : -Math.PI / 2, 0]}>
            <circleGeometry args={[0.5, 48]} />
            <meshStandardMaterial map={rollEnd} roughness={0.9} />
          </mesh>
        ))}
        {[-1.17, 1.17].map((x) => (
          <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.1, 0.1, 0.3, 24]} />
            <meshStandardMaterial color="#14171a" roughness={0.6} />
          </mesh>
        ))}
        {/* brațe de suport */}
        {[-1.3, 1.3].map((x) => (
          <RoundedBox key={x} args={[0.14, 1.0, 0.8]} radius={0.04} smoothness={3} position={[x, -0.22, 0]}>
            <meshStandardMaterial color={BODY} roughness={0.5} />
          </RoundedBox>
        ))}
      </group>

      {/* banda tipărită */}
      <mesh ref={tapeMesh} geometry={ribbon.geo}>
        <meshStandardMaterial
          map={tape.tex}
          alphaTest={0.4}
          side={THREE.DoubleSide}
          roughness={0.85}
          emissive="#ffffff"
          emissiveMap={tape.tex}
          emissiveIntensity={0.16}
        />
      </mesh>
    </group>
  );
}

export default function CalcScene() {
  const wrap = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  const [seen, setSeen] = useState(false);
  const [fonts, setFonts] = useState<SceneFonts | null>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    let on = true;
    sceneFonts().then((f) => on && setFonts(f));
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    return () => {
      on = false;
    };
  }, []);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        setLive(e.isIntersecting);
        if (e.isIntersecting) setSeen(true);
      },
      { rootMargin: "120px 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="scene scene-calc" aria-hidden>
      {seen && (
        <Canvas
          dpr={[1, 1.75]}
          frameloop={live ? "always" : "never"}
          camera={{ position: [0, 6.1, 12.4], fov: 27, near: 0.5, far: 60 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          onCreated={({ camera }) => camera.lookAt(0, 0.2, -0.2)}
        >
          <StudioLight />
          {fonts && <Machine fonts={fonts} reduce={reduce} />}
        </Canvas>
      )}
    </div>
  );
}
