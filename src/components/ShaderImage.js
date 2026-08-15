"use client";

import dynamic from "next/dynamic";

// WebGL-слой грузим только на клиенте; до загрузки виден обычный <img>
const ShaderImageCanvas = dynamic(() => import("./ShaderImageCanvas"), {
  ssr: false,
  loading: () => null,
});

/**
 * Фото с шейдерным ховером: жидкое искажение + зум + rgb-сдвиг.
 * Под канвасом остаётся обычный <img> — SEO, LCP и фолбэк без WebGL.
 */
export default function ShaderImage({ src, alt = "", className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="size-full object-cover" />
      <ShaderImageCanvas src={src} />
    </div>
  );
}
