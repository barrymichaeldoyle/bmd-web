import { PropsWithChildren } from "react";

interface CardProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  hover?: boolean;
  noPadding?: boolean;
}

export function Card({
  as: Component = "div",
  children,
  className,
  hover = false,
  noPadding = false,
}: PropsWithChildren<CardProps>) {
  const baseStyles =
    "bg-white dark:bg-gray-800 shadow-lg rounded-lg mb-8 transition border-2 border-primary mx-2";
  const paddingClass = noPadding ? "" : "p-6";
  const hoverStyles = hover
    ? "hover:shadow-xl hover:bg-green-50 dark:hover:bg-gray-600"
    : "";
  const combinedStyles = `${baseStyles} ${paddingClass} ${hoverStyles} ${
    className || ""
  }`;

  return <Component className={combinedStyles.trim()}>{children}</Component>;
}
