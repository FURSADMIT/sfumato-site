const BASE = "https://sfuma-to.ru";

// обязательно для output: "export" — маршрут генерится статически при билде
export const dynamic = "force-static";

// Next сам собирает это в /robots.txt при билде (работает и со статическим экспортом).
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
