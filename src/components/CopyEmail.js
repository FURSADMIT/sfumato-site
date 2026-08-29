"use client";

import { useRef, useState } from "react";
import { copyToClipboard } from "@/components/copyToClipboard";

/**
 * Кнопка «Написать на почту»: вместо mailto (открывает пустой почтовый клиент,
 * которым в РФ мало кто пользуется) копирует адрес в буфер и показывает подтверждение.
 */
export default function CopyEmail({
  email,
  className = "",
  idleLabel = "НАПИСАТЬ НА ПОЧТУ",
  copiedLabel = "АДРЕС ПОЧТЫ СКОПИРОВАН",
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  const copy = async () => {
    try {
      await copyToClipboard(email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {}
  };

  return (
    <button type="button" onClick={copy} className={`cursor-pointer ${className}`}>
      {copied ? copiedLabel : idleLabel}
    </button>
  );
}
