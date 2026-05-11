import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Jeffy & Co. - Luxury Oil-Based Fragrances",
  description: "Accessible luxury fragrance brand. Timeless, elegant oil-based fragrances crafted with warmth and sophistication.",
  keywords: "luxury fragrances, oil-based perfume, premium scents, artisan fragrance",
  openGraph: {
    title: "Jeffy & Co. - Luxury Fragrances",
    description: "Discover premium oil-based fragrances with timeless elegance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="h-full flex flex-col bg-black text-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
