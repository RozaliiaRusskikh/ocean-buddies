import type { Metadata } from "next";
import Layout from "@/app/(site)/components/Layout";
import "@/styles/globals.css";

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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
