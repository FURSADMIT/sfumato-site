"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uProgress;
  uniform vec2 uPlaneRes;
  uniform vec2 uImageRes;
  uniform vec2 uMouse; /* в координатах контейнера 0..1 */
  varying vec2 vUv;

  vec2 coverUv(vec2 uv) {
    float rs = uPlaneRes.x / uPlaneRes.y;
    float ri = uImageRes.x / uImageRes.y;
    vec2 n = rs < ri
      ? vec2(uImageRes.x * uPlaneRes.y / uImageRes.y, uPlaneRes.y)
      : vec2(uPlaneRes.x, uImageRes.y * uPlaneRes.x / uImageRes.x);
    vec2 offset = (rs < ri
      ? vec2((n.x - uPlaneRes.x) / 2.0, 0.0)
      : vec2(0.0, (n.y - uPlaneRes.y) / 2.0)) / n;
    return uv * uPlaneRes / n + offset;
  }

  void main() {
    float p = uProgress;
    vec2 uv = coverUv(vUv);
    /* мягкий зум всего кадра */
    uv = (uv - 0.5) * (1.0 - 0.05 * p) + 0.5;
    /* линза у курсора: пиксели плавно стягиваются к точке — эффект увеличения */
    vec2 m = coverUv(uMouse);
    vec2 d = uv - m;
    float dist = length(d * vec2(uPlaneRes.x / uPlaneRes.y, 1.0));
    uv -= d * exp(-dist * dist * 9.0) * 0.35 * p;
    /* тонкая волна, расходящаяся от курсора */
    float wave = sin(dist * 26.0 - uTime * 3.2) * exp(-dist * 4.5);
    uv += (d / (dist + 1e-3)) * wave * 0.005 * p;
    gl_FragColor = texture2D(uTexture, uv);
  }
`;

function Plane({ src, progress, mouse }) {
  const matRef = useRef(null);
  const texture = useTexture(src);
  const size = useThree((s) => s.size);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uPlaneRes: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uImageRes: {
        value: new THREE.Vector2(texture.image.width, texture.image.height),
      },
    }),
    [texture]
  );

  useEffect(() => {
    // мутируем юниформы именно у материала: r3f копирует объект из пропса
    matRef.current?.uniforms.uPlaneRes.value.set(size.width, size.height);
  }, [size]);

  useFrame((_, delta) => {
    const u = matRef.current?.uniforms;
    if (!u) return;
    u.uTime.value += delta;
    u.uProgress.value = progress.current;
    // плавное следование линзы за курсором
    u.uMouse.value.lerp(mouse.current, 0.09);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function ShaderImageCanvas({ src }) {
  const progress = useRef(0);
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));
  const stateRef = useRef(null);
  const tickerRef = useRef(null);

  const startTicker = () => {
    if (tickerRef.current) return;
    tickerRef.current = () => {
      stateRef.current?.invalidate();
      if (progress.current < 0.001 && !gsap.isTweening(progress)) stopTicker();
    };
    gsap.ticker.add(tickerRef.current);
  };
  const stopTicker = () => {
    if (!tickerRef.current) return;
    gsap.ticker.remove(tickerRef.current);
    tickerRef.current = null;
  };

  useEffect(() => stopTicker, []);

  const setMouse = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouse.current.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height);
  };
  const animateTo = (value) => {
    startTicker();
    gsap.to(progress, { current: value, duration: 0.8, ease: "power3.out", overwrite: true });
  };

  return (
    <div
      className="absolute inset-0"
      onPointerEnter={(e) => {
        setMouse(e);
        mouse.current && animateTo(1);
      }}
      onPointerMove={setMouse}
      onPointerLeave={() => animateTo(0)}
    >
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        onCreated={(state) => {
          stateRef.current = state;
          state.invalidate();
        }}
      >
        <Suspense fallback={null}>
          <Plane src={src} progress={progress} mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
}
