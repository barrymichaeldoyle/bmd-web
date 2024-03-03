"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaCircle } from "react-icons/fa";

import { navButtonClassName } from "../../styles";
import { iconStyle } from "../style";

interface ThemeToggleProps {
  tabIndex?: number;
}

export default function ThemeToggle({ tabIndex }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <button
      className={navButtonClassName}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Theme Toggle"
      tabIndex={tabIndex}
    >
      {!isMounted ? (
        <FaCircle style={iconStyle} />
      ) : resolvedTheme === "dark" ? (
        <FaSun style={iconStyle} />
      ) : (
        <FaMoon style={iconStyle} />
      )}
    </button>
  );
}
