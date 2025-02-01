import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Lexend } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: "ErenElagz | Read Me",
  description: "ErenElagz Personal Web Site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${lexend.variable} antialiased`}>{children}</body>
    </html>
  );
}
