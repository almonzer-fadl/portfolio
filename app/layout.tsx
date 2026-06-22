import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { I18nProvider } from './i18n-provider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Almonzer Fadl — Product Engineer & Builder",
  description: "Product engineer in Kuala Lumpur building software systems, operational tools, and products from real business problems.",
  keywords: ["portfolio", "software developer", "computer science", "information systems", "react", "nextjs", "typescript"],
  authors: [{ name: "Almonzer Fadl" }],
  creator: "Almonzer Fadl",
  icons: {
    icon: [
      { url: "/logos/logoBlack.png", media: "(prefers-color-scheme: light)" },
      { url: "/logos/logoWhite.png", media: "(prefers-color-scheme: dark)" }
    ],
    shortcut: "/logos/logoBlack.png",
    apple: "/logos/logoBlack.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://almonzerfadl.dev",
    title: "Almonzer Fadl — Product Engineer & Builder",
    description: "I build products from real operational problems.",
    siteName: "Almonzer Fadl",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almonzer Fadl — Product Engineer & Builder",
    description: "I build products from real operational problems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { DynamicDirection } from './dynamic-direction';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased`}
        suppressHydrationWarning
      >
        <I18nProvider>
          <DynamicDirection>{children}</DynamicDirection>
        </I18nProvider>
      </body>
    </html>
  );
}
