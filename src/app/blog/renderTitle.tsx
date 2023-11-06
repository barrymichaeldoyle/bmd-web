import { InlineCodeBlock } from "@/components/InlineCodeBlock";

export function renderTitle(title: string) {
  return title
    .split("`")
    .map((part, index) =>
      index % 2 === 0 ? (
        part
      ) : (
        <InlineCodeBlock key={index}>{part}</InlineCodeBlock>
      ),
    );
}
