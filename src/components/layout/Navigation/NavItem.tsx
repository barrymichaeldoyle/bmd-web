"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface NavItemProps {
  href: string;
  className?: string;
  onClick?: () => void;
  prefetch?: boolean;
  tabIndex?: number;
}

export function NavItem({
  children,
  href,
  className,
  onClick,
  prefetch,
  tabIndex,
}: PropsWithChildren<NavItemProps>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 text-base font-medium text-black dark:text-white hover:text-black dark:hover:text-white border-2 hover:bg-white hover:shadow-md hover:border-primary dark:hover:bg-gray-700 dark:hover:border-primary dark:hover:text-white rounded-md transition
        ${isActive ? "border-black dark:border-white" : "border-transparent"} ${
          className || ""
        }`}
      onClick={onClick}
      prefetch={prefetch}
      tabIndex={tabIndex}
    >
      {children}
    </Link>
  );
}
