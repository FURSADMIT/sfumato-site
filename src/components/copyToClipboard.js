// Копирование текста в буфер без дёрганья экрана.
// На https работает нативный clipboard API; фолбэк для http (дев по IP) —
// скрытое readonly-поле с фокусом без прокрутки и возвратом позиции скролла.
export async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const y = window.scrollY;
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.readOnly = true; // не показывать клавиатуру на iOS
  ta.style.position = "fixed";
  ta.style.top = "0";
  ta.style.left = "0";
  ta.style.opacity = "0";
  ta.style.fontSize = "16px"; // iOS не зумит поля от 16px
  document.body.appendChild(ta);
  ta.focus({ preventScroll: true });
  ta.setSelectionRange(0, text.length);
  document.execCommand("copy");
  ta.remove();
  window.scrollTo(0, y);
}
