import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "sakshammakesthings",
    template: "%s | sakshammakesthings",
  },
  description: "A digital space where I explore the intersection of technology, creativity, and the art of making things.",
  keywords: ["blog", "technology", "web development", "creativity", "tutorials"],
  authors: [{ name: "Saksham" }],
  creator: "Saksham",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sakshammakesthings.com",
    title: "sakshammakesthings",
    description: "A digital space where I explore the intersection of technology, creativity, and the art of making things.",
    siteName: "sakshammakesthings",
  },
  twitter: {
    card: "summary_large_image",
    title: "sakshammakesthings",
    description: "A digital space where I explore the intersection of technology, creativity, and the art of making things.",
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
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
