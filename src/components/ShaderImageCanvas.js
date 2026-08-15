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
  varying vec2 vUv;

  /* uv с поведением object-fit: cover */
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
    /* лёгкий зум к центру */
    uv = (uv - 0.5) * (1.0 - 0.06 * p) + 0.5;
    /* жидкое искажение */
    uv.x += sin(uv.y * 6.2831 + uTime * 1.4) * 0.012 * p;
    uv.y += cos(uv.x * 5.0 + uTime * 1.1) * 0.010 * p;
    /* лёгкий rgb-сдвиг */
    float shift = 0.006 * p;
    float r = texture2D(uTexture, uv + vec2(shift, 0.0)).r;
    float g = texture2D(uTexture, uv).g;
    float b = texture2D(uTexture, uv - vec2(shift, 0.0)).b;
    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

function Plane({ src, progress }) {
  const matRef = useRef(null);
  const texture = useTexture(src);
  const size = useThree((s) => s.size);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uPlaneRes: { value: new THREE.Vector2(1, 1) },
      uImageRes: {
        value: new THREE.Vector2(texture.image.width, texture.image.height),
      },
    }),
    [texture]
  );

  useEffect(() => {
    // мутируем юниформы именно у материала: r3f может скопировать объект из пропса
    matRef.current?.uniforms.uPlaneRes.value.set(size.width, size.height);
  }, [size]);

  useFrame((_, delta) => {
    const u = matRef.current?.uniforms;
    if (!u) return;
    u.uTime.value += delta;
    u.uProgress.value = progress.current;
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
  const stateRef = useRef(null);
  const tickerRef = useRef(null);

  // Пока идёт ховер-анимация — просим кадры; в покое рендера нет (frameloop="demand")
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

  const animateTo = (value) => {
    startTicker();
    gsap.to(progress, {
      current: value,
      duration: 0.9,
      ease: "power3.out",
      overwrite: true,
    });
  };

  return (
    <div
      className="absolute inset-0"
      onPointerEnter={() => animateTo(1)}
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
          <Plane src={src} progress={progress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
