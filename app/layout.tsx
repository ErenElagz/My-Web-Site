import type { Metadata } from "next";
import React from "react";
import "@/styles/globals.css"; // ✅ Import Global CSS
import NavBar from "@/components/NavBar/NavBar"; // ✅ Correct Import
import Footer from "@/components/Footer/Footer"; // ✅ Correct Import
import GradientOverlayBottom from "@/components/GradientOverlay/GradientOverlayBottom";
import GradientOverlayTop from "@/components/GradientOverlay/GradientOverlayTop";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ErenElagz | Read Me",
  description: "ErenElagz Personal Web Site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1YEZP484CP"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-1YEZP484CP");
        `,
          }}
        />
      </head>
      <body className="max-w-[1200px] px-4 lg:w-5/12 flex flex-col mx-auto  m-3 md:mt-6">
        <GradientOverlayTop />
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <GradientOverlayBottom />
      </body>
    </html>
  );
}
