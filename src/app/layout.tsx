import { PrismicPreview } from "@prismicio/next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import { FooterLink } from "@/components/FooterLink";
import { LogoLink } from "@/components/layout/LogoLink";
import { Navigation } from "@/components/layout/Navigation/Navigation";
import { repositoryName } from "@/prismicio";

import "../styles/globals.css";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barry Michael Doyle",
  description: "Portfolio and blog for Barry Michael Doyle",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body
        className={`${inter.className} font-sans bg-green-200 dark:bg-black flex flex-col min-h-screen overscroll-none`}
      >
        <Providers>
          <header className="bg-white dark:bg-black shadow border-b-2 border-primary dark:border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <div className="lg:w-0 lg:flex-1">
                  <LogoLink priority textClassName="hidden md:block" />
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
        {repositoryName && <PrismicPreview repositoryName={repositoryName} />}
        <Analytics />
      </body>
    </html>
  );
}
