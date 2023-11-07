import { useEffect } from "react";

function getFocusableElements(
  container: Document | Element = document,
): HTMLElement[] {
  return Array.from(
    container.querySelectorAll(
      'a[href], button, textarea, input, select, details, [tabindex]:not([tabindex="-1"])',
    ),
  ) as HTMLElement[];
}

export function useDisableFocusableElementsOnMenuOpen(isMenuOpen: boolean) {
  useEffect(() => {
    const focusableElements = getFocusableElements();

    if (isMenuOpen) {
      focusableElements.forEach((el) => {
        if (!el.closest("#mobile-menu") && !el.closest("#header")) {
          const htmlEl = el as HTMLElement;
          htmlEl.setAttribute(
            "data-previous-tabindex",
            String(htmlEl.tabIndex),
          );
          htmlEl.tabIndex = -1;
        }
      });
    } else {
      focusableElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const previousTabIndex = htmlEl.getAttribute("data-previous-tabindex");
        if (previousTabIndex !== null) {
          htmlEl.tabIndex = parseInt(previousTabIndex, 10);
          htmlEl.removeAttribute("data-previous-tabindex");
        }
      });
    }

    return () => {
      focusableElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const previousTabIndex = htmlEl.getAttribute("data-previous-tabindex");
        if (previousTabIndex !== null) {
          htmlEl.tabIndex = parseInt(previousTabIndex, 10);
          htmlEl.removeAttribute("data-previous-tabindex");
        }
      });
    };
  }, [isMenuOpen]);
}
