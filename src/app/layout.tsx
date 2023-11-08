import { Analytics } from "@vercel/analytics/react";
import { GeistSans, GeistMono } from "geist/font";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { FooterLink } from "@/components/FooterLink";
import { Navigation } from "@/components/layout/Navigation/Navigation";

import "../styles/globals.css";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barry Michael Doyle",
  description: "Portfolio and blog for Barry Michael Doyle",
};

export const viewport: Viewport = {
  themeColor: "#63fbb4",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} font-sans bg-green-200 dark:bg-black flex flex-col min-h-screen overscroll-none`}
      >
        <Providers>
          <header
            id="header"
            className="sticky top-0 z-10 bg-white dark:bg-black shadow border-b-2 border-primary"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <div className="lg:w-0 lg:flex-1">
                  <Link className="flex items-center w-fit" href="/">
                    <div className="flex justify-center items-center bg-black rounded-md">
                      <Image
                        alt="BMD Logo"
                        src="/bmd.png"
                        width={128}
                        height={62}
                        className="rounded-lg height-auto"
                        priority
                      />
                    </div>
                    <h1
                      className={`hidden sm:block text-3xl lg:text-4xl font-bold leading-tight mx-4`}
                    >
                      Barry Michael Doyle
                    </h1>
                  </Link>
                </div>
                <div className="flex items-center">
                  <Navigation />
                </div>
              </div>
            </div>
          </header>
          <main className="flex-grow">
            <div className="max-w-7xl mx-auto pt-6 pb-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <footer className="bg-white dark:bg-gray-800 border-primary border-t-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-8 flex justify-center md:justify-between items-center flex-col md:flex-row">
                <div className="flex flex-wrap justify-center mb-4 md:mb-0">
                  <FooterLink href="/blog">Blog</FooterLink>
                  <FooterLink href="/contact">Contact</FooterLink>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-center text-primary bg-gray-800 dark:bg-gray-600 text-xs px-2 py-1 rounded-xl">
                    © {new Date().getFullYear()} Barry Michael Doyle. All
                    rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
