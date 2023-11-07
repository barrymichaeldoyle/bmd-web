import { useEffect, useState } from "react";

export function useNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

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
  }, [isMenuOpen]);

  return { isMenuOpen, toggleMenu };
}
