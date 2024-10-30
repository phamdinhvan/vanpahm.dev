import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hi, I'm VanPahm",
  description: "Web Developer turned Indie Maker",
};

const ibmMono = IBM_Plex_Mono({ weight: ['100', '200', '300', '400', '500', '600', '700'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmMono.className}>{children}</body>
      </html>
  );
}
