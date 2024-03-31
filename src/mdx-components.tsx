import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    strong: ({ children }) => <strong style={{ textShadow: "0.5px 0.5px black" }}>{children}</strong>,
    br: ({ children }) => <><br /><br /></>,
    p: ({ children }) => <p className="mb-7">{children}</p>,
    h1: ({ children }) => <h1 className="bg-red-500 text-3xl font-bold">{children}</h1>,
    a: ({ children }) => <a className="cursor-pointer underline text-blue-600 hover:text-blue-800 visited:text-purple-600">{children}</a>,
    ...components,
  }
}
