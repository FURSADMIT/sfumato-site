"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Обёртка, которая плавно проявляет и поднимает контент,
 * когда он въезжает в экран при скролле.
 *
 * <Reveal delay={0.1}>...любой контент...</Reveal>
 */
export default function Reveal({ children, delay = 0, y = 40, className = "" }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        y,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%", // анимация стартует, когда верх блока на 85% высоты экрана
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
