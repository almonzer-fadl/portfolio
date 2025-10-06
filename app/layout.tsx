import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/lib/theme-context';

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Almonzer Fadl - Portfolio",
  description: "Electrical & Electronics Engineering Student | Software Developer | Available for work",
  keywords: ["portfolio", "software developer", "electrical engineering", "react", "nextjs", "typescript"],
  authors: [{ name: "Almonzer Fadl" }],
  creator: "Almonzer Fadl",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://almonzerfadl.dev",
    title: "Almonzer Fadl - Portfolio",
    description: "Electrical & Electronics Engineering Student | Software Developer",
    siteName: "Almonzer Fadl Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almonzer Fadl - Portfolio",
    description: "Electrical & Electronics Engineering Student | Software Developer",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${sourceSerif.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}