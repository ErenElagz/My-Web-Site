import type { Metadata } from "next";
import React from "react";
import { Figtree, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Eren Elagoz — Mobile, Web & UI/UX Engineer",
  description:
    "Mobile & Full-Stack Engineer and UI/UX Designer building production apps, booking platforms, and clean visual interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${figtree.variable} ${geistMono.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1YEZP484CP"
          strategy="afterInteractive"
        />
        <meta
          name="p:domain_verify"
          content="e699b8751b27154d0a53fcd968b10e79"
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
      <body className="min-h-screen bg-bg text-text-secondary antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto flex min-h-screen max-w-[1240px] flex-col px-5 sm:px-8 lg:px-12">
            <NavBar />
            <main className="flex-1 pt-6 pb-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
