"use client";

import dynamic from "next/dynamic";

// WebGL-слой грузим только на клиенте; до загрузки виден обычный <img>
const ShaderImageCanvas = dynamic(() => import("./ShaderImageCanvas"), {
  ssr: false,
  loading: () => null,
});

/**
 * Фото с ховер-эффектом. Два варианта:
 * - "veil" (по умолчанию) — «сфумато-дымка»: в покое лёгкий расфокус и белёсая
 *   вуаль, при наведении дымка рассеивается и фото мягко приближается;
 * - "lens" — WebGL-линза: мягкий зум, под курсором деликатное увеличение
 *   с тонкой волной, следует за мышью;
 * - "breathe" — «кадр вдыхает»: в покое внутренний кроп, при наведении рамка
 *   раскрывается на весь контейнер, фото мягко отдаляется.
 */
export default function ShaderImage({ src, alt = "", className = "", effect = "veil" }) {
  if (effect === "breathe") {
    return (
      <div className={`group/fx relative ${className}`}>
        <div className="size-full overflow-hidden [clip-path:inset(5%_5%_5%_5%)] transition-[clip-path] duration-[900ms] ease-out group-hover/fx:[clip-path:inset(0%_0%_0%_0%)]">
          <img
            src={src}
            alt={alt}
            className="size-full scale-[1.12] object-cover transition-transform duration-[900ms] ease-out group-hover/fx:scale-[1.03]"
          />
        </div>
      </div>
    );
  }
  if (effect === "lens") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img src={src} alt={alt} className="size-full object-cover" />
        <ShaderImageCanvas src={src} />
      </div>
    );
  }
  return (
    <div className={`group/fx relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="size-full scale-[1.03] object-cover blur-[5px] transition-[filter,transform] duration-[900ms] ease-out group-hover/fx:scale-[1.06] group-hover/fx:blur-none"
      />
      <div className="pointer-events-none absolute inset-0 bg-white/20 transition-opacity duration-[900ms] ease-out group-hover/fx:opacity-0" />
    </div>
  );
}
