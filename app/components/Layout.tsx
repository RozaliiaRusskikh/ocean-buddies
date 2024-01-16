"use client";

import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import ToasterContext from "../context/Toaster.Context";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <>
      <Header pathname={pathname} />
      <main className="min-h-screen">
        <ToasterContext />
        {children}
      </main>
      <Footer />
    </>
  );
}
