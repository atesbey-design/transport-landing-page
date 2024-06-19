import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elit Tur - Güvenli ve Kolay Taşımacılık Hizmetleri",
  description: "Evinizden İş Yerine Kolay ve Güvenli Taşımacılık Hizmeti. Personel ve öğrenci taşımacılığı için en iyi seçenek.",
  keywords: "taşımacılık, servis, güvenli taşımacılık, kolay taşımacılık, öğrenci taşıma hizmeti, servis, personel taşıma",
  icons: {
    icon: "/big-elit-tur.png",
  },
  openGraph: {
    type: 'website',
    url: 'https://www.elittur.com',
    title: 'Elit Tur - Güvenli ve Kolay Taşımacılık Hizmetleri',
    description: 'Evinizden İş Yerine Kolay ve Güvenli Taşımacılık Hizmeti. Personel ve öğrenci taşımacılığı için en iyi seçenek.',
    images: [
      {
        url: 'https://www.elittur.com/images/hero.jpg',
        width: 800,
        height: 600,
        alt: 'Elit Tur Taşımacılık',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@elittur',
    title: 'Elit Tur - Güvenli ve Kolay Taşımacılık Hizmetleri',
    description: 'Evinizden İş Yerine Kolay ve Güvenli Taşımacılık Hizmeti. Personel ve öğrenci taşımacılığı için en iyi seçenek.',
    images: 'https://www.elittur.com/images/hero.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/big-elit-tur.png" type="image/x-icon" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Elit Tur" />
        <meta property="og:locale" content="tr_TR" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
