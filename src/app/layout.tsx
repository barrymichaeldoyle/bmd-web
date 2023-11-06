import { GeistSans } from "geist/font";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { NavItem } from "@/components/NavItem";
import ThemeToggle from "@/components/ThemeToggle";

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
        className={`${inter.className} font-sans bg-green-100 dark:bg-black`}
      >
        <Providers>
          <header className="bg-green-100 dark:bg-black">
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
                        className="rounded-lg"
                        priority
                      />
                    </div>
                    <h1 className="hidden md:block text-xl md:text-3xl lg:text-4xl font-bold leading-tight mx-4">
                      Barry Michael Doyle
                    </h1>
                  </Link>
                </div>
                <div className="flex items-center">
                  <nav className="md:flex space-x-2">
                    <NavItem href="/blog">
                      <span className="hidden lg:inline">My </span>Blog
                    </NavItem>
                    <NavItem href="/contact">
                      Contact<span className="hidden lg:inline"> Me</span>
                    </NavItem>
                  </nav>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </header>
          <main className="max-w-7xl mx-auto pt-2 pb-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
