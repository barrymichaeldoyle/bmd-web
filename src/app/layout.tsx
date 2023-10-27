import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { PropsWithChildren } from "react";

import ThemeToggle from "@/components/ThemeToggle";
import "../styles/globals.css";
import { Providers } from "./providers";
import { NavItem } from "@/components/NavItem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barry Michael Doyle",
  description: "Portfolio and blog for Barry Michael Doyle",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} font-sans bg-gray-100 dark:bg-black`}
      >
        <Providers>
          <header className="bg-gray-100 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="lg:w-0 lg:flex-1">
                  <a className="flex items-center w-fit " href="/">
                    <div className="flex justify-center items-center bg-black rounded-md">
                      <Image
                        alt="BMD Logo"
                        src="/bmd.png"
                        width={100}
                        height={48}
                        className="rounded-lg"
                      />
                    </div>
                    <h1 className="text-3xl font-bold leading-tight mx-4">
                      Barry Michael Doyle
                    </h1>
                  </a>
                </div>
                <nav className="md:flex space-x-10">
                  <NavItem href="/blog">My Blog</NavItem>
                  <NavItem href="/contact">Contact Me</NavItem>
                </nav>

                <ThemeToggle />
              </div>
            </div>
          </header>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
