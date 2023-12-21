"use client";

import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <body>
      <Header pathname={pathname} />
      <main>{children}</main>
      <Footer />
    </body>
  );
}
