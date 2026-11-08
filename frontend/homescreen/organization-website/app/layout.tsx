import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}