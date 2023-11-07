import { FaTimes } from "react-icons/fa";

import { navButtonClassName } from "@/components/styles";

import { LogoLink } from "../LogoLink";
import ThemeToggle from "./ThemeToggle";
import { NavItem } from "./NavItem";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const navItems = [
  { href: "/blog", text: "My Blog" },
  { href: "/contact", text: "Contact Me" },
];

export function MobileMenu({ isMenuOpen, toggleMenu }: MobileMenuProps) {
  const tabIndex = isMenuOpen ? 0 : -1;

  return (
    <div
      id="mobile-menu"
      className={`fixed top-0 right-0 h-full z-50 transform transition-transform ease-out duration-300 w-full md:w-auto bg-white dark:bg-black p-4 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center px-2 py-2">
        <LogoLink
          textClassName="hidden sm:block"
          tabIndex={tabIndex}
          onClick={toggleMenu}
        />
        <div className="flex justify-end flex-1">
          <ThemeToggle tabIndex={tabIndex} />
          <button
            onClick={toggleMenu}
            className={navButtonClassName}
            tabIndex={tabIndex}
          >
            <FaTimes w={30} h={30} />
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-8 space-y-6">
        {navItems.map(({ href, text }) => (
          <NavItem
            key={href}
            href={href}
            onClick={toggleMenu}
            tabIndex={tabIndex}
          >
            {text}
          </NavItem>
        ))}
      </div>
    </div>
  );
}
