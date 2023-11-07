import { useState } from "react";

import { useCloseMenuOnEscape } from "./hooks/useCloseMenuOnEscape";
import { useDisableFocusableElementsOnMenuOpen } from "./hooks/useDisableFocusableElementsOnMenuOpen";
import { useDisableScrollOnMenuOpen } from "./hooks/useDisableScrollOnMenuOpen";

export function useNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  // a11y hooks
  useCloseMenuOnEscape({ isMenuOpen, toggleMenu });
  useDisableFocusableElementsOnMenuOpen(isMenuOpen);
  useDisableScrollOnMenuOpen(isMenuOpen);

  return { isMenuOpen, toggleMenu };
}
