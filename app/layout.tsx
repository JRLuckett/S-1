import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S-1 Ventures — GTM Operating Partner for Venture-Backed Software Companies",
  description:
    "S-1 builds the GTM foundation your next VP Sales needs to succeed. Value framework, ICP, sales process, pipeline systems — built in parallel with the revenue push.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('s1:heroPlayed'))document.documentElement.classList.add('hero-played')}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Outfit:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
