import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import om from '@/public/om-96.png'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Тиртхадэва | йога, медитация, адвайта.",
  description: "Хатха йога, кундалини йога, раджа йога, медитация",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
