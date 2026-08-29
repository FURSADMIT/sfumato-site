"use client";

import { useRef, useState } from "react";
import { copyToClipboard } from "@/components/copyToClipboard";

/** Текстовая ссылка-почта, которая по клику копирует адрес вместо mailto. */
export default function CopyEmailInline({ email, className = "" }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  const copy = async () => {
    try {
      await copyToClipboard(email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <button type="button" onClick={copy} className={`relative cursor-pointer text-left ${className}`}>
      {/* адрес всегда занимает место (невидимый при подтверждении) — ширина не прыгает */}
      <span className={copied ? "invisible" : undefined}>{email}</span>
      {copied && <span className="absolute inset-0 text-left">адрес скопирован</span>}
    </button>
  );
}
