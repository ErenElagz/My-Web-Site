import type { Metadata } from "next";
import React from "react";
import Script from "next/script"; // ✅ Import GA script handling
import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import GradientOverlayBottom from "@/components/GradientOverlay/GradientOverlayBottom";
import GradientOverlayTop from "@/components/GradientOverlay/GradientOverlayTop";

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
        {/* ✅ Google Analytics Script (Replace `G-XXXXXXX` with your GA ID) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="relative flex flex-col min-h-screen antialiased">
        {/* Top Gradient */}
        <GradientOverlayTop />

        {/* Navigation */}
        <NavBar />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Bottom Gradient */}
        <GradientOverlayBottom />
      </body>
    </html>
  );
}
