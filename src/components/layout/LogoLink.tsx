import Link from "next/link";

import { Logo } from "./Logo";

interface LogoLinkProps {
  onClick?: () => void;
  priority?: boolean;
  tabIndex?: number;
  textClassName?: string;
}

export function LogoLink({
  onClick,
  priority = false,
  tabIndex = 0,
  textClassName = "",
}: LogoLinkProps) {
  return (
    <Link
      className="flex items-center w-fit"
      href="/"
      onClick={onClick}
      tabIndex={tabIndex}
    >
      <div className="flex justify-center items-center bg-black rounded-md">
        <Logo priority={priority} />
      </div>
      <h1
        className={`text-3xl lg:text-4xl font-bold leading-tight mx-4 ${textClassName}`}
      >
        Barry Michael Doyle
      </h1>
    </Link>
  );
}
