import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "EFOVI | Escuela de Formación para la Vida",
  description:
    "Academia virtual para formación integral, desarrollo personal, espiritualidad y educación de calidad.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/efovi-favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/efovi-favicon.png", sizes: "512x512" }],
  },
  openGraph: {
    title: "EFOVI | Escuela de Formación para la Vida",
    description:
      "Academia virtual para formación integral, desarrollo personal, espiritualidad y educación de calidad.",
    images: [
      {
        url: "/efovi-logo-oficial.jpeg",
        width: 1600,
        height: 640,
        alt: "Logo oficial EFOVI",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
