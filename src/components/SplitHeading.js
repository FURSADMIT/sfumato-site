"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * Заголовок, который собирается построчно из-под маски при скролле.
 *
 * <SplitHeading as="h2" className="...">текст</SplitHeading>
 *
 * autoSplit сам ждёт загрузки шрифта и пересобирает строки при ресайзе.
 */
export default function SplitHeading({ children, as: Tag = "h2", className = "", delay = 0 }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      SplitText.create(ref.current, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.09,
            delay,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              once: true,
            },
          });
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
