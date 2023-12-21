import type { Metadata } from "next";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Ocean Buddies",
  description: "Find Dive Buddies",
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
