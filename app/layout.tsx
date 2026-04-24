import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "forallhumanity.org",
  description:
    "An editorial, black-and-white front page for thoughtful discussions on humanity's defining questions."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bodoni.variable}`}>
        {children}
      </body>
    </html>
  );
}
