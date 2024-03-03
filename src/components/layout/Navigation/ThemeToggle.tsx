"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import { navButtonClassName } from "../../styles";

interface ThemeToggleProps {
  tabIndex?: number;
}

export default function ThemeToggle({ tabIndex }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  function handleThemeToggleClick() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  const icon = resolvedTheme === "light" ? <FaMoon /> : <FaSun />;
  const buttonLabel = `Set theme to ${
    resolvedTheme === "light" ? "dark" : "light"
  }`;

  return (
    <button
      className={`${navButtonClassName} absolute top-8 right-7`}
      onClick={handleThemeToggleClick}
      aria-label={buttonLabel}
      tabIndex={tabIndex}
    >
      <span aria-hidden>{icon}</span>
    </button>
  );
}
