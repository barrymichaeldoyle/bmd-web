import Link from "next/link";
import { PropsWithChildren } from "react";

interface FooterLinkProps {
  href: string;
}

export function FooterLink({
  children,
  href,
}: PropsWithChildren<FooterLinkProps>) {
  return (
    <Link
      href={href}
      className="text-black dark:text-white mx-1 my-1 px-2 text-black dark:text-white hover:text-black dark:hover:text-white border-2 hover:bg-white hover:shadow-md hover:border-primary dark:hover:bg-gray-700 dark:hover:border-primary dark:hover:text-white rounded-md transition border-transparent"
    >
      {children}
    </Link>
  );
}
