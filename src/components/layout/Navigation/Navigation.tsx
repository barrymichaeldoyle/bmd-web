"use client";
import { FaHamburger } from "react-icons/fa";

import { navButtonClassName } from "../../styles";
import { NavItem } from "./NavItem";
import ThemeToggle from "./ThemeToggle";
import { useNavigation } from "./useNavigation";
import { MobileMenu } from "./MobileMenu";

export function Navigation() {
  const { isMenuOpen, toggleMenu } = useNavigation();

  return (
    <nav>
      <div className="hidden md:inline space-x-2">
        <NavItem href="/blog">
          <span className="hidden lg:inline">My </span>Blog
        </NavItem>
        <NavItem href="/contact">
          Contact<span className="hidden lg:inline"> Me</span>
        </NavItem>
      </div>

      <ThemeToggle />
      <button
        onClick={toggleMenu}
        className={`md:hidden ${navButtonClassName}`}
        aria-label="Open Navigation Menu"
      >
        <FaHamburger />
      </button>

      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}