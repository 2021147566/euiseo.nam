import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://2021147566.github.io/euiseo.nam"),
  title: "Nam Euiseo | AI Researcher & PM",
  description: "AI Researcher & PM — Sports Video Analytics · Clinical LLM/VLM · 데이터로 전략을 설계합니다",
  keywords: ["AI Researcher", "Sports Analytics", "Clinical LLM", "Clinical VLM", "Machine Learning", "PM", "남의서", "Nam Euiseo"],
  authors: [{ name: "Nam Euiseo", url: "https://github.com/2021147566" }],
  openGraph: {
    title: "Nam Euiseo | AI Researcher & PM",
    description: "Sports Video Analytics · Clinical LLM/VLM · 데이터로 전략을 설계합니다",
    type: "website",
    images: [{ url: "/profile-clean.png", width: 248, height: 331, alt: "Nam Euiseo" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Inline dark-mode init — runs before React hydration to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
