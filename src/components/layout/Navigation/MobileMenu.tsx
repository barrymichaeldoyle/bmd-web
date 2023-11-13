import { NavItem } from "./NavItem";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const navItems = [
  { href: "/blog", text: "My Blog" },
  { href: "/contact", text: "Contact Me" },
];

export default function MobileMenu({
  isMenuOpen,
  toggleMenu,
}: MobileMenuProps) {
  const tabIndex = isMenuOpen ? 0 : -1;

  return (
    <div
      id="mobile-menu"
      className={`fixed top-[111.74px] right-0 h-full z-50 transform transition-transform ease-out duration-300 w-full md:w-auto bg-white dark:bg-black p-4 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col mt-2 space-y-1">
        {navItems.map(({ href, text }) => (
          <NavItem
            key={href}
            href={href}
            onClick={toggleMenu}
            tabIndex={tabIndex}
            prefetch={isMenuOpen}
          >
            {text}
          </NavItem>
        ))}
      </div>
    </div>
  );
}
