import type { Metadata } from "next";
import React from "react";
import { Figtree, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://erenelagz.com"),
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
        <meta
          name="p:domain_verify"
          content="e699b8751b27154d0a53fcd968b10e79"
        />
      </head>
      <body className="min-h-screen bg-bg text-text-secondary antialiased">
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-xs focus:font-medium focus:text-accent-fg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto flex min-h-screen max-w-[1240px] flex-col px-5 sm:px-8 lg:px-12">
            <NavBar />
            <main id="main-content" className="flex-1 pt-6 pb-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
