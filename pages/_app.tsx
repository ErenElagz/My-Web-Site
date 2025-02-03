import type { AppProps } from "next/app";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import GradientOverlayBottom from "@/components/GradientOverlay/GradientOverlayBottom";
import GradientOverlayTop from "@/components/GradientOverlay/GradientOverlayTop";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-[660px] px-4 lg:w-4/12 flex flex-col mx-auto  m-3 md:mt-6">
      {/* Top Gradient */}
      <GradientOverlayTop />

      {/* Navigation */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Bottom Gradient */}
      <GradientOverlayBottom />
    </div>
  );
}
