import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aqib Ashef",
  description: "Tech Entrepreneur, Building Digital Product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-91ZF8TTR7M'/>
      <Script src='js/ganalytics.js'/>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
