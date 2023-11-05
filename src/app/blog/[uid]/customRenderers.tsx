import { Components } from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const customRenderers: Components = {
  h1({ node, ...props }) {
    return <h1 className="text-3xl font-bold my-5" {...props} />;
  },
  h2({ node, ...props }) {
    return <h2 className="text-2xl font-bold my-4" {...props} />;
  },
  h3({ node, ...props }) {
    return <h3 className="text-xl font-bold my-3" {...props} />;
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
      <code className={className}>{children}</code>
    );
  },
  ol({ node, children, ...props }) {
    return (
      <ol className="list-decimal list-inside" {...props}>
        {children}
      </ol>
    );
  },
  ul({ node, children, ...props }) {
    return (
      <ul className="list-disc list-inside" {...props}>
        {children}
      </ul>
    );
  },
  li({ node, children, ...props }) {
    return (
      <li className="ml-4" {...props}>
        {children}
      </li>
    );
  },
};
