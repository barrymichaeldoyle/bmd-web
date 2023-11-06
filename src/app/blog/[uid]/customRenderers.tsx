import { InlineCodeBlock } from "@/components/InlineCodeBlock";
import Image from "next/image";
import { Components } from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const customRenderers: Components = {
  h1({ node, ...props }) {
    return <h1 className="text-3xl font-bold mt-10 mb-5" {...props} />;
  },
  h2({ node, ...props }) {
    return <h2 className="text-2xl font-bold mt-8 mb-3" {...props} />;
  },
  h3({ node, ...props }) {
    return <h3 className="text-xl font-bold mt-6 mb-3" {...props} />;
  },
  p({ node, ...props }) {
    return <p className="my-4" {...props} />;
  },
  code(props) {
    const { children, className } = props;
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <Prism
        className="rounded-md shadow-md"
        style={vscDarkPlus}
        customStyle={{ marginTop: "1.5em", marginBottom: "1.5em" }}
        language={match[1]}
        PreTag="div"
      >
        {String(children).replace(/\n$/, "")}
      </Prism>
    ) : (
      <InlineCodeBlock>{children}</InlineCodeBlock>
    );
  },
  ol({ node, children, ...props }) {
    return (
      <ol className="list-decimal list-inside my-2" {...props}>
        {children}
      </ol>
    );
  },
  ul({ node, children, ...props }) {
    return (
      <ul className="list-disc list-inside my-2" {...props}>
        {children}
      </ul>
    );
  },
  li({ node, children, ...props }) {
    return (
      <li className="ml-4 my-2" {...props}>
        {children}
      </li>
    );
  },
  blockquote({ node, children, ...props }) {
    return (
      <blockquote
        className="my-4 pl-4 py-1 border-l-4 border-primary bg-green-50 italic text-gray-800 dark:bg-gray-900 dark:text-gray-200 rounded-r-xl shadow-sm"
        {...props}
      >
        {children}
      </blockquote>
    );
  },
  img(props) {
    const substrings = props.alt?.split("{{") || [];
    const alt = substrings[0].trim();

    const width = Number(substrings[1]?.match(/(?<=w:\s?)\d+/g)?.[0]) || 800;
    const height = Number(substrings[1]?.match(/(?<=h:\s?)\d+/g)?.[0]) || 400;

    // return <img className="my-4" {...props} />;
    return (
      <Image
        src={props.src || ""}
        alt={alt}
        width={width}
        height={height}
        className="my-4 mx-auto"
      />
    );
  },
};
