import type { Metadata } from "next";
import { Barlow, Archivo, Caveat, DM_Mono } from "next/font/google";
import "./globals.css";

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
      <body className="bg-gs-paper text-gs-ink antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
