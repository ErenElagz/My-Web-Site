import type { Metadata } from "next";

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
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
