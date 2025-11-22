import type { Metadata } from "next";
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-heading"
});

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "صفحة المنتج - عرض محدود",
  description: "اكتشف أفضل عرض للمنتج مع سعر 3500 دج والتوصيل مجاني لكل الولايات."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${plex.variable} antialiased bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
