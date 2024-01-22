import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-alexander-garcia.vercel.app/"
  ),
  title: "Alexander Portfolio",
  description: "Developer Portfolio By Alexander Garcia",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Alexander Garcia"],
  openGraph: {
    title: "Alexander Garcia",
    description: "Front End Developer",
    images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
