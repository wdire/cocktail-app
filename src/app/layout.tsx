import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat_font",
});

export const metadata: Metadata = {
  title: "Cocktail App - Expert Recipes",
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
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
