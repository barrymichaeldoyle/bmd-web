"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";

const className =
  "p-2 bg-buttons m-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white rounded-md";

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
    >
      {!isMounted ? (
        <TbFidgetSpinner className="animate-spin" />
      ) : theme === "dark" ? (
        <FaSun />
      ) : (
        <FaMoon />
      )}
    </button>
  );
}
