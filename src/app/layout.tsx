import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/layout/header";
import { CocktailsProvider } from "@/context/cocktails-context";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat_font",
});

export const metadata: Metadata = {
  title: {
    template: "%s / Cocktail App - Expert Recipes",
    default: "Cocktail App - Expert Recipes",
  },
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
      <body className={montserrat.variable}>
        <CocktailsProvider>
          <Header />
          {children}
        </CocktailsProvider>
      </body>
    </html>
  );
}
