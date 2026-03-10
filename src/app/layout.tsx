import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/constants/site";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { TopBar } from "@/components/common/TopBar";
import { LangProvider } from "@/lib/context/LangContext"; 

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  preload: true,        
  adjustFontFallback: true, 
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,       
  adjustFontFallback: true, 
});
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: { type: "website", siteName: siteConfig.name },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
       <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
    <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
  <LangProvider>
    <TopBar />
    <Header />
    <main>{children}</main>
    <Footer />
  </LangProvider>
</body>
    </html>
  );
}
