import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";
import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { FooterLink } from "@/components/layout/FooterLink";
import { FooterSocialLink } from "@/components/layout/FooterSocialLink";
import { LogoLink } from "@/components/layout/LogoLink";
import { Navigation } from "@/components/layout/Navigation/Navigation";

import "../styles/globals.css";

import { Providers } from "./providers";
import Script from "next/script";

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
      className={`${GeistSans.className}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-green-200 dark:bg-black flex flex-col min-h-screen overscroll-none">
        <Providers>
          <header
            id="header"
            className="sticky top-0 z-10 bg-white dark:bg-black shadow border-b-2 border-primary"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <div className="lg:w-0 lg:flex-1">
                  <LogoLink />
                </div>
                <div className="flex items-center">
                  <Navigation />
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-col flex-grow overflow-auto">
            <main className="flex-grow ambient-gradient">
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
                  <div className="flex space-x-2">
                    <FooterSocialLink
                      aria-label="LinkedIn"
                      href="https://www.linkedin.com/in/barry-michael-doyle-11369683/"
                      icon={FaLinkedin}
                    />
                    <FooterSocialLink
                      aria-label="GitHub"
                      href="https://github.com/barrymichaeldoyle"
                      icon={FaGithub}
                    />
                    <FooterSocialLink
                      aria-label="Dev.to"
                      href="https://dev.to/barrymichaeldoyle"
                      icon={FaDev}
                    />
                    <FooterSocialLink
                      aria-label="Stack Overflow"
                      href="https://stackoverflow.com/users/2111515/barry-michael-doyle"
                      icon={FaStackOverflow}
                    />
                    <FooterSocialLink
                      aria-label="YouTube"
                      href="https://youtube.com/@barrymichaeldoyle"
                      icon={FaYoutube}
                    />
                    <FooterSocialLink
                      aria-label="X.com"
                      href="https://x.com/barrymdoyle"
                      icon={FaTwitter}
                    />
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
          </div>
        </Providers>
        <Analytics />
        {process.env.ENABLE_ADS === "true" && (
          <Script
            id="adsbygoogle-init"
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3482457944656598"
            crossOrigin="anonymous"
          />
        )}
      </body>
    </html>
  );
}
