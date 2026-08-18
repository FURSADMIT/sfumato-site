"use client";

import { useEffect, useRef } from "react";

/**
 * Фоновое видео с гарантированным автозапуском на мобильных.
 * React не рендерит атрибут muted в SSR-разметке, из-за чего iOS
 * отказывается автоматически запускать видео — ставим muted и play()
 * вручную, а при блокировке (режим энергосбережения) повторяем попытку
 * при первом касании экрана.
 */
export default function AutoVideo({ src, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;

    const tryPlay = () => v.play().catch(() => {});
    tryPlay();

    const onTouch = () => {
      tryPlay();
      window.removeEventListener("touchstart", onTouch);
    };
    window.addEventListener("touchstart", onTouch, { passive: true });
    return () => window.removeEventListener("touchstart", onTouch);
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
    />
  );
}
