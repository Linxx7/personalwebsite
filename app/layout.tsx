import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "700"],
  display: "swap",
});

// Troque pela URL definitiva quando tiver o domínio
const SITE_URL = "https://ricardoduarte.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ricardo Duarte · Desenvolvedor Full Stack Brasília",
    template: "%s · Ricardo Duarte",
  },
  description:
    "Desenvolvedor Full Stack em Brasília (DF) especializado em React, Node.js e TypeScript. +5 anos de experiência. Disponível para projetos, freela e retainer mensal.",
  keywords: [
    "desenvolvedor full stack brasília",
    "full stack developer brasília",
    "desenvolvedor react node typescript",
    "freela desenvolvimento web brasília",
    "Ricardo Duarte desenvolvedor",
    "desenvolvedor full stack freelancer brasil",
  ],
  authors: [{ name: "Ricardo Duarte", url: SITE_URL }],
  creator: "Ricardo Duarte",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.png" }, { url: "/favicon.svg" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Ricardo Duarte · Desenvolvedor Full Stack",
    title: "Ricardo Duarte · Desenvolvedor Full Stack Brasília",
    description:
      "Desenvolvedor Full Stack em Brasília especializado em React, Node.js e TypeScript. +5 anos de experiência. Disponível para projetos, freela e retainer.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ricardo Duarte – Desenvolvedor Full Stack Brasília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Duarte · Desenvolvedor Full Stack Brasília",
    description:
      "Desenvolvedor Full Stack em Brasília especializado em React, Node.js e TypeScript. +5 anos de experiência. Disponível para projetos.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Ricardo Duarte",
      url: SITE_URL,
      jobTitle: "Desenvolvedor Full Stack",
      description:
        "Full Stack Developer especializado em React, Node.js e TypeScript. +5 anos de experiência construindo aplicações escaláveis para o setor público e privado.",
      email: "ricardolins97@gmail.com",
      telephone: "+5561982670133",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brasília",
        addressRegion: "DF",
        addressCountry: "BR",
      },
      sameAs: [
        "https://linkedin.com/in/ricardo-alberto-lins-duarte-913185170",
        "https://github.com/Linxx7",
      ],
      knowsAbout: [
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "MongoDB",
        "AWS",
        "Docker",
        "NestJS",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Ricardo Duarte · Desenvolvedor Full Stack",
      description:
        "Portfólio e site profissional de Ricardo Duarte, Desenvolvedor Full Stack em Brasília.",
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "pt-BR",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0e1a] text-[#e8f0fe] font-sans antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BWECP6KF1V"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BWECP6KF1V');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
