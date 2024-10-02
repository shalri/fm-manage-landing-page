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
        className={`${bevietnam.className} relative flex min-h-screen flex-col scroll-smooth antialiased`}
      >
        <div className="absolute right-0 top-0 size-[444px] overflow-hidden sm:size-[55.525%] sm:max-h-[800px] sm:min-w-[600px]">
          <div className="z-[1] h-full w-full bg-[url(/images/bg-tablet-pattern.svg)] bg-contain bg-[right_-126px_top_-104px] bg-no-repeat sm:bg-[right_-134px_top_-140px]" />
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
