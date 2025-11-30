import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PsychoNauka - Psychologia Społeczna",
  description: "Aplikacja do nauki psychologii społecznej. 183 pytań z książki Wojciszke & Grzyb (2024).",
  keywords: ["psychologia", "nauka", "quiz", "psychologia społeczna", "egzamin"],
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
