import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Nisarg Bhatt",
    template: "%s | Nisarg Bhatt",
  },
  description: "My portfolio, blog, and personal website.",
  icons: "/favicon.svg",
  creator: "Nisarg Bhatt",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`tracking-tight antialiased`}>
        <div className="flex min-h-screen flex-col justify-between bg-white text-gray-900 dark:bg-zinc-950 dark:text-zinc-200">
          <Header />
          <main className="container mx-auto w-full flex-1 border-r border-l border-neutral-200">
            {children}
            <Analytics />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
