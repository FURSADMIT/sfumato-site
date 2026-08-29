import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MenuProvider from "@/components/Menu";

const ntSomic = localFont({
  src: "../../public/fonts/NT_Somic-VF.ttf",
  weight: "100 900",
  variable: "--font-nt-somic",
});

const DESCRIPTION =
  "Бутиковое агентство эстетичных маркетинговых кампаний. Маркетинг — через эстетику, стратегию и культурный контекст.";

export const metadata = {
  metadataBase: new URL("https://sfuma-to.ru"),
  title: "sfumàto — агентство эстетичного маркетинга",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://sfuma-to.ru",
    siteName: "sfumàto",
    title: "sfumàto — агентство эстетичного маркетинга",
    description: DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "sfumàto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "sfumàto — агентство эстетичного маркетинга",
    description: DESCRIPTION,
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
        <SmoothScroll>
          <MenuProvider>{children}</MenuProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
