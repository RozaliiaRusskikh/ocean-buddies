import type { Metadata } from "next";
import Layout from "@/app/components/Layout";
import "@/styles/globals.css";
import { nunito_sans } from "./fonts";

export const metadata: Metadata = {
  title: "Ocean Buddies | Find Divers",
  description:
    "Find Dive Buddies near your location, search for divers around the world",
  keywords: ["Dive", "Buddies", "PADI", "Search", "Find", "Divers"],
  icons: {
    icon: "./icon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${nunito_sans.className} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
