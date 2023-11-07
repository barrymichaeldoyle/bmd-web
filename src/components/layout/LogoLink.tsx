import Link from "next/link";

import { Logo } from "./Logo";

interface LogoLinkProps {
  textClassName?: string;
}

export function LogoLink({ textClassName = "" }: LogoLinkProps) {
  return (
    <Link className="flex items-center w-fit" href="/">
      <div className="flex justify-center items-center bg-black rounded-md">
        <Logo />
      </div>
      <h1
        className={`text-3xl lg:text-4xl font-bold leading-tight mx-4 ${textClassName}`}
      >
        Barry Michael Doyle
      </h1>
    </Link>
  );
}
