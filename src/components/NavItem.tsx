"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface NavItemProps {
  href: string;
}

export function NavItem({ children, href }: PropsWithChildren<NavItemProps>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a
      href={href}
      className={`px-4 py-2 text-base font-medium border-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white rounded-md 
        ${isActive ? "border-black dark:border-white" : "border-transparent"}`}
    >
      {children}
    </a>
  );
}
