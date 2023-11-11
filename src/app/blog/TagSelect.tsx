"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect } from "react";

import { Select } from "@/components/Select";

interface TagSelectProps {
  selectedTag?: string;
  tags: string[];
}

export function TagSelect({ selectedTag, tags }: TagSelectProps) {
  const router = useRouter();

  // Prevent the user from selecting a tag that doesn't exist
  useEffect(() => {
    if (selectedTag && !tags.includes(selectedTag)) {
      router.push("/blog");
    }
  }, [selectedTag, tags]);

  function handleTagChange(e: ChangeEvent<HTMLSelectElement>) {
    const tag = e.target.value;
    if (tag) {
      router.push(`/blog?tag=${tag}`);
    } else {
      router.push("/blog");
    }
  }

  return (
    <Select
      defaultValue={selectedTag || ""}
      onChange={handleTagChange}
      options={[
        { label: "All Tags", value: "" },
        ...tags.map((tag) => ({ label: tag, value: tag })),
      ]}
    />
  );
}
