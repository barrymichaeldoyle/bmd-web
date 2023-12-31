import { useLayoutStore } from "../store";
import { useCloseMenuOnEscape } from "./hooks/useCloseMenuOnEscape";
import { useDisableFocusableElementsOnMenuOpen } from "./hooks/useDisableFocusableElementsOnMenuOpen";
import { useDisableScrollOnMenuOpen } from "./hooks/useDisableScrollOnMenuOpen";

export function useNavigation() {
  // zustand hooks
  const { isMenuOpen, toggleMenu } = useLayoutStore();

  // a11y hooks
  useCloseMenuOnEscape({ isMenuOpen, toggleMenu });
  useDisableFocusableElementsOnMenuOpen(isMenuOpen);
  useDisableScrollOnMenuOpen(isMenuOpen);

  return { isMenuOpen, toggleMenu };
}
