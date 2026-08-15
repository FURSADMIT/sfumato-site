import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MenuProvider from "@/components/Menu";

const ntSomic = localFont({
  src: "../../public/fonts/NT_Somic-VF.ttf",
  weight: "100 900",
  variable: "--font-nt-somic",
});

export const metadata = {
  title: "sfumàto — агентство эстетичного маркетинга",
  description:
    "Бутиковое агентство эстетичных маркетинговых кампаний. Маркетинг — через эстетику, стратегию и культурный контекст.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${ntSomic.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SmoothScroll>
          <MenuProvider>{children}</MenuProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
