"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaCircle } from "react-icons/fa";
import { navButtonClassName } from "../../styles";

export default function ThemeToggle() {
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
