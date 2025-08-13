import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import GoogleAnalytics from "../components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "MonacoByte",
  description: "AI solutions for your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="relative">
        <GoogleAnalytics /> {/* <-- GA tracking */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}