import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MenuProvider from "@/components/Menu";
import CookieNotice from "@/components/CookieNotice";

const ntSomic = localFont({
  src: "../../public/fonts/NT_Somic-VF.ttf",
  weight: "100 900",
  variable: "--font-nt-somic",
});

const DESCRIPTION =
  "Бутиковое маркетинговое агентство: SMM-стратегия и ведение социальных сетей, инфлюенс-маркетинг, motion-дизайн, таргет и Яндекс Директ. Маркетинг через эстетику и смысл.";

// Для превью-карточки в мессенджерах и соцсетях — короткая брендовая строка
const SOCIAL_TITLE = "sfumàto — бутиковое агентство эстетичного маркетинга";
const SOCIAL_DESCRIPTION =
  "Превращаем эстетику в отклик, а ценности бренда — в значимый опыт для людей.";

export const metadata = {
  metadataBase: new URL("https://sfuma-to.ru"),
  title: "sfumàto — эстетичный маркетинг: SMM, стратегия, таргет",
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

// Микроразметка Schema.org — помогает поисковикам понять, что это за компания
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "sfumàto",
  url: "https://sfuma-to.ru",
  image: "https://sfuma-to.ru/og.jpg",
  logo: "https://sfuma-to.ru/icon.png",
  description: DESCRIPTION,
  email: "hello@sfuma-to.ru",
  areaServed: "RU",
  sameAs: [
    "https://instagram.com/sfumato_curator",
    "https://vk.com/sfuma_to",
    "https://t.me/Sfuma_to",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${ntSomic.variable} h-full antialiased`}>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="yandex-metrica" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js?id=112068374","ym");ym(112068374,"init",{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/112068374"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <SmoothScroll>
          <MenuProvider>{children}</MenuProvider>
          <CookieNotice />
        </SmoothScroll>
      </body>
    </html>
  );
}
