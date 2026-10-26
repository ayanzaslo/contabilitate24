"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { sceneFonts, type SceneFonts } from "./sceneFonts";
import { StudioLight } from "./studio";

/**
 * Cadran de 24 de ore, ca un instrument de birou: carcasă grafit strunjită, față imprimată,
 * ac de oțel. Programul public (9-18) e bandă de fildeș, garda e bandă verde, iar cele
 * trei incidente reale din pagină sunt mărgele de sticlă verde pe ora la care s-au întâmplat.
 */

const INK = "#14191a";
const IVORY = "#e9ebe2";
const GREEN = "#c8561e";

const R_FACE = 2.45;
const INCIDENTS = [21 + 40 / 60, 9 + 12 / 60, 8 + 5 / 60];

/** hora h (0..24) -> unghi de ceas, 0 sus, sensul acelor */
const ang = (h: number) => (h / 24) * Math.PI * 2;

function faceTexture(f: SceneFonts) {
  const S = 1024;
  const c = document.createElement("canvas");
  c.width = c.height = S;
  const g = c.getContext("2d")!;
  const cx = S / 2;
  const R = S / 2;

  const bg = g.createRadialGradient(cx, cx * 0.9, 40, cx, cx, R);
  bg.addColorStop(0, "#272e30");
  bg.addColorStop(1, "#171c1d");
  g.fillStyle = bg;
  g.fillRect(0, 0, S, S);

  // banda orelor: fildeș = program public (9-18), verde = gardă
  const rOut = R * 0.86;
  const rIn = R * 0.7;
  for (let h = 0; h < 24; h++) {
    const a0 = ang(h) - Math.PI / 2 + 0.012;
    const a1 = ang(h + 1) - Math.PI / 2 - 0.012;
    g.beginPath();
    g.arc(cx, cx, rOut, a0, a1);
    g.arc(cx, cx, rIn, a1, a0, true);
    g.closePath();
    g.fillStyle = h >= 9 && h < 18 ? IVORY : GREEN;
    g.fill();
  }

  // gradații exterioare
  g.strokeStyle = "rgba(233,235,226,.55)";
  for (let m = 0; m < 96; m++) {
    const a = (m / 96) * Math.PI * 2 - Math.PI / 2;
    const long = m % 4 === 0;
    g.lineWidth = long ? 3 : 1.5;
    const r0 = R * (long ? 0.9 : 0.92);
    g.beginPath();
    g.moveTo(cx + Math.cos(a) * r0, cx + Math.sin(a) * r0);
    g.lineTo(cx + Math.cos(a) * R * 0.95, cx + Math.sin(a) * R * 0.95);
    g.stroke();
  }

  // cifre
  g.fillStyle = IVORY;
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.font = `700 64px ${f.display}`;
  for (const h of [0, 6, 12, 18]) {
    const a = ang(h) - Math.PI / 2;
    g.fillText(String(h).padStart(2, "0"), cx + Math.cos(a) * R * 0.58, cx + Math.sin(a) * R * 0.58);
  }
  g.font = `500 26px ${f.mono}`;
  g.fillStyle = "rgba(233,235,226,.7)";
  for (const h of [3, 9, 15, 21]) {
    const a = ang(h) - Math.PI / 2;
    g.fillText(String(h), cx + Math.cos(a) * R * 0.58, cx + Math.sin(a) * R * 0.58);
  }

  // inscripție
  g.fillStyle = IVORY;
  g.font = `800 82px ${f.display}`;
  g.fillText("24/7", cx, cx - 88);
  g.font = `500 22px ${f.mono}`;
  g.fillStyle = "rgba(233,235,226,.7)";
  g.fillText("GARDĂ ANAF · ITM · SPV", cx, cx + 92);

  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function Dial({ fonts }: { fonts: SceneFonts }) {
  const { size } = useThree();
  const rig = useRef<THREE.Group>(null);
  const hand = useRef<THREE.Group>(null);
  const beads = useRef<(THREE.Mesh | null)[]>([]);
  const pointer = useRef({ x: 0, y: 0 });

  const face = useMemo(() => faceTexture(fonts), [fonts]);
  useEffect(() => () => face.dispose(), [face]);

  // carcasa: profil strunjit cu teșituri
  const bodyGeo = useMemo(() => {
    const pts = [
      [0, 0],
      [2.72, 0],
      [2.82, 0.06],
      [2.84, 0.38],
      [2.74, 0.5],
      [2.55, 0.5],
      [2.5, 0.42],
      [0, 0.42],
    ].map(([x, y]) => new THREE.Vector2(x, y));
    return new THREE.LatheGeometry(pts, 96);
  }, []);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    pointer.current.x += (state.pointer.x - pointer.current.x) * Math.min(dt * 2.4, 1);
    pointer.current.y += (state.pointer.y - pointer.current.y) * Math.min(dt * 2.4, 1);
    const r = rig.current;
    if (r) {
      r.scale.setScalar(THREE.MathUtils.clamp(size.width / 470, 0.55, 1.05));
      r.rotation.x = 0.95 + pointer.current.y * 0.12;
      r.rotation.z = pointer.current.x * 0.22 + Math.sin(t * 0.25) * 0.02;
    }
    if (hand.current) {
      const now = new Date();
      const hh = now.getHours() + now.getMinutes() / 60;
      hand.current.rotation.y = -ang((hh + t * 0.6) % 24);
    }
    beads.current.forEach((m, i) => {
      if (m) m.position.y = 0.62 + Math.sin(t * 1.6 + i * 2) * 0.03;
    });
  });

  return (
    <group ref={rig}>
      <mesh geometry={bodyGeo}>
        <meshStandardMaterial color="#262b2d" roughness={0.45} metalness={0.15} />
      </mesh>
      {/* inel metalic în jurul feței */}
      <mesh position={[0, 0.425, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[R_FACE + 0.03, 0.045, 16, 128]} />
        <meshStandardMaterial color="#b9bdb8" roughness={0.28} metalness={0.9} />
      </mesh>
      {/* fața imprimată */}
      <mesh position={[0, 0.428, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[R_FACE, 96]} />
        <meshStandardMaterial map={face} roughness={0.55} />
      </mesh>

      {/* mărgele: incidentele rezolvate, pe ora lor */}
      {INCIDENTS.map((h, i) => {
        const a = ang(h);
        const rr = R_FACE * 0.7 * 0.86;
        return (
          <mesh
            key={h}
            ref={(m) => {
              beads.current[i] = m;
            }}
            position={[Math.sin(a) * rr, 0.62, -Math.cos(a) * rr]}
          >
            <sphereGeometry args={[0.17, 32, 32]} />
            <meshStandardMaterial color="#ffd9c2" emissive={GREEN} emissiveIntensity={0.55} roughness={0.08} metalness={0.1} />
          </mesh>
        );
      })}

      {/* acul de oțel */}
      <group ref={hand} position={[0, 0.5, 0]}>
        <mesh position={[0, 0, -R_FACE * 0.46]}>
          <boxGeometry args={[0.07, 0.03, R_FACE * 0.98]} />
          <meshStandardMaterial color="#d9dcd6" roughness={0.25} metalness={0.95} />
        </mesh>
        <mesh position={[0, 0, 0.38]}>
          <boxGeometry args={[0.09, 0.03, 0.5]} />
          <meshStandardMaterial color="#d9dcd6" roughness={0.25} metalness={0.95} />
        </mesh>
      </group>
      <mesh position={[0, 0.54, 0]}>
        <cylinderGeometry args={[0.13, 0.15, 0.1, 40]} />
        <meshStandardMaterial color="#c4c8c2" roughness={0.22} metalness={0.95} />
      </mesh>

      {/* sticla: reflexie fină peste față */}
      <mesh position={[0, 0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[R_FACE + 0.02, 96]} />
        <meshStandardMaterial transparent opacity={0.1} roughness={0.04} metalness={0} color="#ffffff" depthWrite={false} />
      </mesh>
    </group>
  );
}

export default function ClockScene() {
  const wrap = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  const [seen, setSeen] = useState(false);
  const [fonts, setFonts] = useState<SceneFonts | null>(null);

  useEffect(() => {
    let on = true;
    sceneFonts().then((f) => on && setFonts(f));
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
    <div ref={wrap} className="scene scene-clock" aria-hidden>
      {seen && (
        <Canvas
          dpr={[1, 1.75]}
          frameloop={live ? "always" : "never"}
          camera={{ position: [0, 1.2, 9.6], fov: 32 }}
          onCreated={({ camera }) => camera.lookAt(0, 0.4, 0)}
          gl={{ antialias: true, alpha: true }}
        >
          <StudioLight />
          {fonts && <Dial fonts={fonts} />}
        </Canvas>
      )}
    </div>
  );
}
