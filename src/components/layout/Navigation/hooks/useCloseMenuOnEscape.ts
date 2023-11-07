import { useEffect } from "react";

interface UseCloseMenuOnEscapeArgs {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export function useCloseMenuOnEscape({
  isMenuOpen,
  toggleMenu,
}: UseCloseMenuOnEscapeArgs) {
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function keyDownHandler(e: globalThis.KeyboardEvent) {
      if (isMenuOpen && e.key === "Escape") {
        e.preventDefault();
        toggleMenu();
      }
    }

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [isMenuOpen, toggleMenu]);
}
