import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Тиртхадэва | йога, медитация, адвайта.",
  description: "Хатха йога, кундалини йога, медитация, йога онлайн",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
