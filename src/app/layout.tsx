import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bevietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Manage Landing Page | FScode",
  description:
    "Solution for Manage Landing Page challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bevietnam.className} flex min-h-screen flex-col scroll-smooth antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
