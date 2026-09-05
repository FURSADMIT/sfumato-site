import { SERVICES } from "@/data/services";

// обязательно для output: "export" — маршрут генерится статически при билде
export const dynamic = "force-static";

const BASE = "https://sfuma-to.ru";

// Next сам собирает это в /sitemap.xml при билде (работает и со статическим экспортом).
// Список услуг берём из того же SERVICES, что и страницы — не разъедется при добавлении.
export default function sitemap() {
  const ruStatic = ["/", "/privacy/", "/media/"];
  const ruServices = SERVICES.map((s) => `/services/${s.slug}/`);
  const enStatic = ["/en/", "/en/media/"];
  const enServices = SERVICES.map((s) => `/en/services/${s.slug}/`);
  const paths = [...ruStatic, ...ruServices, ...enStatic, ...enServices];

  return paths.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
