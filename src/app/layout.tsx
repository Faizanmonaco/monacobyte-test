import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MonacoByte",
  description: "AI solutions for your business",
};

const GA_MEASUREMENT_ID = "G-BB0H8H4NN0"; // <- your GA4 ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Track page views on client-side navigation
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", GA_MEASUREMENT_ID, { page_path: pathname });
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body className="relative">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}