import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"], variable: "--inter_font" });

export const metadata: Metadata = {
  title: "Cocktail App - Expert Approved",
  description:
    "Every 11 of 10 expert cocktailers use Cocktail App. Join Among The Pros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
