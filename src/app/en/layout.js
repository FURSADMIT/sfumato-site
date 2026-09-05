import localFont from "next/font/local";
import "../globals.css";
import SiteChrome from "@/components/SiteChrome";

const ntSomic = localFont({
  src: "../../../public/fonts/NT_Somic-VF.ttf",
  weight: "100 900",
  variable: "--font-nt-somic",
});

const EN_TITLE = "sfumàto — boutique aesthetic marketing agency";
const EN_DESCRIPTION =
  "sfumàto is a boutique aesthetic marketing agency: SMM strategy and management, influencer marketing, motion & AI design, paid social. We turn aesthetics into response — and brand values into meaningful experiences.";
const EN_SOCIAL_DESCRIPTION =
  "We turn aesthetics into response — and brand values into meaningful experiences.";

export const metadata = {
  metadataBase: new URL("https://sfuma-to.ru"),
  title: EN_TITLE,
  description: EN_DESCRIPTION,
  alternates: { canonical: "/en", languages: { ru: "/", en: "/en" } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sfuma-to.ru/en",
    siteName: "sfumàto",
    title: EN_TITLE,
    description: EN_SOCIAL_DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "sfumàto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: EN_TITLE,
    description: EN_SOCIAL_DESCRIPTION,
    images: ["/og.jpg"],
  },
};

export default function EnLayout({ children }) {
  return (
    <html lang="en" className={`${ntSomic.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
