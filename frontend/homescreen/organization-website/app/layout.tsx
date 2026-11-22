
import type { Metadata } from "next";
import { Source_Serif_4, Libre_Franklin } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sufi Humanity Aid International",
  description: "Sufi Humanity Aid International",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} ${libreFranklin.variable}`}>
        {children}
      </body>
    </html>
  );
}
