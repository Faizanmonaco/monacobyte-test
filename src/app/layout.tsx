import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import DarkVeil from "../components/DarkVeil";

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
      <body className="relative bg-black text-white">
        {/* DarkVeil background */}
        <div className="fixed inset-0 -z-10">
          <DarkVeil />
        </div>

        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}