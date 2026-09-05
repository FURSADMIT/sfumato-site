import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import MenuProvider from "@/components/Menu";
import CookieNotice from "@/components/CookieNotice";

// Общая «обвязка» страницы для обоих корневых layout (ru и en):
// микроразметка, Яндекс.Метрика, плавный скролл, меню и cookie-баннер.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "sfumàto",
  url: "https://sfuma-to.ru",
  image: "https://sfuma-to.ru/og.jpg",
  logo: "https://sfuma-to.ru/icon.png",
  description:
    "Бутиковое маркетинговое агентство: SMM-стратегия и ведение социальных сетей, инфлюенс-маркетинг, motion-дизайн, таргет и Яндекс Директ. Маркетинг через эстетику и смысл.",
  email: "hello@sfuma-to.ru",
  areaServed: "RU",
  sameAs: [
    "https://instagram.com/sfumato_curator",
    "https://vk.com/sfuma_to",
    "https://t.me/Sfuma_to",
  ],
};

export default function SiteChrome({ children }) {
  return (
    <>
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
    </>
  );
}
