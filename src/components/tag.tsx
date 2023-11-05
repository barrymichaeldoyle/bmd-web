import { PropsWithChildren } from "react";

interface TagProps {
  tag: string;
}

export function Tag({ tag }: TagProps) {
  return (
    <span className="inline-block bg-[#63FBB3] text-green-900 text-xs px-2 py-1 rounded-full mx-1 my-1 font-bold shadow-sm">
      #{tag}
    </span>
  );
}
