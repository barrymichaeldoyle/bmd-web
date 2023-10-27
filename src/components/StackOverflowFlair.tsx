"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export function StackOverflowFlair() {
  const { theme } = useTheme();

  if (!theme) {
    return undefined;
  }

  return (
    <Image
      src={`https://stackoverflow.com/users/flair/2111515.png?theme=${theme}`}
      width={208}
      height={58}
      alt="profile for Barry Michael Doyle at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
      title="profile for Barry Michael Doyle at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
    />
  );
}
