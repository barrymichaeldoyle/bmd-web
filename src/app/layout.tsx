import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { PropsWithChildren } from "react";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans bg-white dark:bg-black`}>
        <Providers>
          <header className="bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex items-center lg:w-0 lg:flex-1">
                  <div className="flex justify-center items-center w-20 bg-black rounded-md border-2 border-white">
                    <Image
                      alt="BMD Logo"
                      src="/bmd.jpeg"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h1 className="text-3xl font-bold leading-tight ml-4">
                    Barry Michael Doyle
                  </h1>
                </div>
                <nav className="md:flex space-x-10">
                  <a href="/" className="text-base font-medium">
                    Blog
                  </a>
                  <a href="/" className="text-base font-medium">
                    Contact
                  </a>
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
