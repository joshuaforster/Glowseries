import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "glowseries. — interior design. space transformation.",
  description: "Interior design packages, Venetian plaster walls and handcrafted statement furniture. Commercial spaces transformed. Norwich, UK.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-gs-paper text-gs-ink antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
