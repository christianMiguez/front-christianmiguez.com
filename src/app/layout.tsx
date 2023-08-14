import { Header, Footer } from "@/components/layout/";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import GoogleAnalytics from "@/components/features/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Christian Miguez",
  description:
    "Web Developer - WordPress Expert, React, Next.js, WPGraphQL, AWS, PHP, MySQL, Web Design, SEO, and more.",
  openGraph: {
    images: [
      {
        url: "/assets/images/me2.png",
        width: 350,
        height: 350,
        alt: "Christian Miguez",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <GoogleAnalytics GA_TRACKING_ID={"G-C4D9EFW4VL"} />
      </head>
      <body className={`${inter.className} ${openSans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
