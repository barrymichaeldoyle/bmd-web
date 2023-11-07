"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaCircle } from "react-icons/fa";
import { navButtonClassName } from "../../styles";

interface ThemeToggleProps {
  tabIndex?: number;
}

export default function ThemeToggle({ tabIndex }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <button
      className={navButtonClassName}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Theme Toggle"
      tabIndex={tabIndex}
    >
      {!isMounted ? (
        <FaCircle />
      ) : theme === "dark" ? (
        <FaSun suppressHydrationWarning />
      ) : (
        <FaMoon />
      )}
    </button>
  );
}
