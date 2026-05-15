import type { Metadata } from "next";
import { Barlow, Archivo, Caveat, DM_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import ScrollReset from "@/components/ScrollReset";

const barlow = Barlow({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--nf-display",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--nf-archivo",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--nf-caveat",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--nf-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "glowseries. — interior design. space transformation.",
  description:
    "Interior design packages, Venetian plaster walls and handcrafted statement furniture. Commercial spaces transformed. Norwich, UK.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${archivo.variable} ${caveat.variable} ${dmMono.variable}`}
    >
      <body className="text-gs-ink antialiased overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gs-ink focus:text-gs-paper focus:font-archivo focus:text-sm focus:font-bold focus:uppercase focus:tracking-wider focus:rounded-full"
        >
          Skip to main content
        </a>
        <ScrollReset />
        {children}
        <Cursor />
      </body>
    </html>
  );
}
