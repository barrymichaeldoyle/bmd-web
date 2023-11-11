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
      className="text-green-900 dark:text-white mx-2 my-1 hover:underline"
    >
      {children}
    </Link>
  );
}
