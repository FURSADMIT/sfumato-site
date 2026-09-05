import localFont from "next/font/local";
import "../globals.css";
import SiteChrome from "@/components/SiteChrome";

const ntSomic = localFont({
  src: "../../../public/fonts/NT_Somic-VF.ttf",
  weight: "100 900",
  variable: "--font-nt-somic",
});

const DESCRIPTION =
  "Консультации, SMM-стратегия и ведение социальных сетей, инфлюенс-маркетинг, motion и AI-дизайн, таргетированная реклама в социальных сетях, Яндекс Директ и CPA.";

// Для превью-карточки в мессенджерах и соцсетях — короткая брендовая строка
const SOCIAL_TITLE = "sfumàto — бутиковое агентство эстетичного маркетинга";
const SOCIAL_DESCRIPTION =
  "Превращаем эстетику в отклик, а ценности бренда — в значимый опыт для людей.";

export const metadata = {
  metadataBase: new URL("https://sfuma-to.ru"),
  title: "sfumàto — бутиковое агентство эстетичных маркетинговых кампаний",
  description: DESCRIPTION,
  alternates: { canonical: "/", languages: { ru: "/", en: "/en" } },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://sfuma-to.ru",
    siteName: "sfumàto",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "sfumàto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: ["/og.jpg"],
  },
};

export default function RuLayout({ children }) {
  return (
    <html lang="ru" className={`${ntSomic.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
