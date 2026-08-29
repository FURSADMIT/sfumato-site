"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * Тонкая плашка о cookies (Яндекс.Метрика). Показывается до нажатия «Хорошо»,
 * согласие запоминается в localStorage. Язык — по адресу страницы.
 */
export default function CookieNotice() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname() || "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  useEffect(() => {
    if (!localStorage.getItem("cookies-ok")) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-ok", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background">
      <div className="flex flex-col items-start gap-3 px-6 py-4 text-[13px] leading-[1.45] md:flex-row md:items-center md:justify-between md:px-12">
        <p className="text-gray">
          {isEn ? (
            <>
              We use cookies for statistics (Yandex Metrica). Details — in our{" "}
              <Link href="/privacy" className="underline underline-offset-2 transition-colors hover:text-muted">
                privacy policy
              </Link>
              .
            </>
          ) : (
            <>
              Мы используем cookies для статистики (Яндекс.Метрика). Подробнее — в{" "}
              <Link href="/privacy" className="underline underline-offset-2 transition-colors hover:text-muted">
                политике конфиденциальности
              </Link>
              .
            </>
          )}
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 cursor-pointer text-[13px] font-medium tracking-[0.01em] transition-colors hover:text-muted"
        >
          {isEn ? "[ OK ]" : "[ ХОРОШО ]"}
        </button>
      </div>
    </div>
  );
}
