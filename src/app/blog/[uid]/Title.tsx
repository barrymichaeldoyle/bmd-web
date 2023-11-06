import { renderTitle } from "../renderTitle";

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return <h1 className="text-3xl font-bold my-4">{renderTitle(title)}</h1>;
}
