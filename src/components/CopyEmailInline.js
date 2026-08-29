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
    <button type="button" onClick={copy} className={`cursor-pointer text-left ${className}`}>
      {copied ? "адрес скопирован" : email}
    </button>
  );
}
