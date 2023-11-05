"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaCircle } from "react-icons/fa";

const className =
  "px-4 py-3 bg-buttons ml-2 dark:hover:bg-gray-700 dark:hover:text-white rounded-md hover:bg-white hover:shadow-md transition";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <button
      className={className}
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
