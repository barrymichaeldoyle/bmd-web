"use client";
import { FaHamburger, FaTimes } from "react-icons/fa";

import { navButtonClassName } from "../../styles";
import { LogoLink } from "../LogoLink";
import { NavItem } from "./NavItem";
import ThemeToggle from "./ThemeToggle";
import { useNavigation } from "./useNavigation";

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
      >
        <FaHamburger />
      </button>

      <div
        className={`fixed top-0 right-0 h-full z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden md:translate-x-0 motion-safe:transition-transform ease-out duration-300 w-full md:w-auto bg-white dark:bg-black p-4`}
      >
        <div className="flex items-center px-2 py-2">
          <LogoLink textClassName="hidden sm:block" />
          <div className="flex justify-end flex-1">
            <ThemeToggle />
            <button onClick={toggleMenu} className={navButtonClassName}>
              <FaTimes w={30} h={30} />
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-8 space-y-6">
          <NavItem href="/blog" onClick={toggleMenu}>
            <span className="hidden lg:inline">My </span>Blog
          </NavItem>
          <NavItem href="/contact" onClick={toggleMenu}>
            Contact<span className="hidden lg:inline"> Me</span>
          </NavItem>
        </div>
      </div>
    </nav>
  );
}
