import type { Metadata } from "next";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Ocean Buddies | Search for divers around the world",
  description: "Find Dive Buddies near your location",
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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
