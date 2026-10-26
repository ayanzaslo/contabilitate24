import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono, Onest } from "next/font/google";
import "./globals.css";

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

const mono = Martian_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
});

const body = Onest({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Contabilitate 24 Timișoara – C.S.H. BUSINESS SRL | CIM economist, gardă 24/7",
  description:
    "Contabilitate până la bilanț + control ANAF și ITM, legal, cu CIM de economist la firma ta (Art.10 Legea 82/1991) și mentenanță 24/7. Sânmihaiu Român, Timiș – operare națională.",
};

export const viewport: Viewport = {
  themeColor: "#e3e6de",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
