"use client";

import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { Rajdhani, Nunito_Sans } from "next/font/google";

const rajdhani = Rajdhani({
  weight: ["600"],
  subsets: ["latin-ext"],
});

const nunito_sans = Nunito_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <>
      <style jsx global>{`
        :root {
          /* ... */
          --font-rajdhani: ${rajdhani.style.fontFamily};
          --font-nunito-sans: ${nunito_sans.style.fontFamily};
        }
      `}</style>
      <Header pathname={pathname} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
