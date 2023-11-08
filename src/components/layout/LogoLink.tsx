"use client";
import Link from "next/link";
import Image from "next/image";

import { useLayoutStore } from "./store";

export function LogoLink() {
  const { isMenuOpen, toggleMenu } = useLayoutStore();

  return (
    <Link
      className="flex items-center w-fit"
      href="/"
      onClick={isMenuOpen ? toggleMenu : undefined}
    >
      <div className="flex justify-center items-center bg-black rounded-md">
        <Image
          alt="BMD Logo"
          src="/bmd.png"
          width={128}
          height={61.5}
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
  );
}
