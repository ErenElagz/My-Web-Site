import type { Metadata } from "next";
import React from "react";
import "@/styles/globals.css"; // ✅ Import Global CSS
import NavBar from "@/components/NavBar/NavBar"; // ✅ Correct Import
import Footer from "@/components/Footer/Footer"; // ✅ Correct Import
import GradientOverlayBottom from "@/components/GradientOverlay/GradientOverlayBottom";
import GradientOverlayTop from "@/components/GradientOverlay/GradientOverlayTop";

export const metadata: Metadata = {
  title: "ErenElagz | Read Me",
  description: "ErenElagz Personal Web Site.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body    className="max-w-[660px] px-4 lg:w-4/12 flex flex-col mx-auto  m-3 md:mt-6">
        <GradientOverlayTop />
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <GradientOverlayBottom />
      </body>
    </html>
  );
}
