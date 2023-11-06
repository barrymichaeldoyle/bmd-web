import { PropsWithChildren } from "react";

interface CardProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  hover?: boolean;
}

export function Card({
  as: Component = "div",
  children,
  className,
  hover = false,
}: PropsWithChildren<CardProps>) {
  const styles = [
    "bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8 transition border-2 border-primary mx-2",
  ];
  if (hover)
    styles.push("hover:shadow-xl hover:bg-green-50 dark:hover:bg-gray-600");
  if (className) styles.push(className);

  return <Component className={styles.join(" ")}>{children}</Component>;
}
