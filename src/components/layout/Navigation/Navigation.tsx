"use client";
import dynamic from "next/dynamic";
import { FaHamburger, FaTimes } from "react-icons/fa";

import { navButtonClassName } from "../../styles";
import { NavItem } from "./NavItem";
import ThemeToggle from "./ThemeToggle";
import { useNavigation } from "./useNavigation";

const MobileMenu = dynamic(() => import("./MobileMenu"), {});

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
        aria-label={`${isMenuOpen ? "Close" : "Open"} Navigation Menu`}
      >
        {isMenuOpen ? <FaTimes /> : <FaHamburger />}
      </button>

      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}
