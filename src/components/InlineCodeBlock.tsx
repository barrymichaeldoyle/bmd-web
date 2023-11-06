import { PropsWithChildren } from "react";

export function InlineCodeBlock({ children }: PropsWithChildren) {
  return (
    <code className="inline-block bg-gray-100 dark:bg-gray-700 px-1 rounded-md">
      {children}
    </code>
  );
}
