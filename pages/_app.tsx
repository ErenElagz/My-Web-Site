import type { AppProps } from "next/app";
import "@/styles/globals.css"; // Global CSS burada import edilmeli

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
