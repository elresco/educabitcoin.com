import type { MDXComponents } from "mdx/types"
import { encodeElementId } from "./common/utils"



export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    strong: ({ children }) => <strong style={{ textShadow: "0.5px 0.5px black" }}>{children}</strong>,
    blockquote: (props) => <blockquote className="flex flex-row gap-2">
      <img className="w-20 h-20" width={"5rem"} height={"5rem"} src="/img/quote-icon.png" alt="quote-icon" />
      <div className="mt-10 pt-4 px-4 border-s-4 border-gray-300 bg-gray-200">
        {props.children}
      </div>
    </blockquote>,
    li: (props) => {
      if (typeof props.children === "string") {
        return <li className="flex items-center justify-start">🔸 {props.children}</li>
      }
    },
    br: ({ children }) => <><br /><br /></>,
    img: ({ src, alt }) => <div className="flex items-center justify-center"><img src={src} alt={alt} /></div>,
    p: ({ children }) => <div className="mb-7">{children}</div>,
    h1: ({ children }) => <h1 id={encodeElementId(children)} className="text-3xl font-black mb-7">{children}</h1>,
    h2: ({ children }) => <h2 id={encodeElementId(children)} className="text-2xl font-bold mb-7">{children}</h2>,
    h3: ({ children }) => <h3 id={encodeElementId(children)} className="text-xl font-bold mb-7">{children}</h3>,
    a: ({ children }) => <a className="cursor-pointer underline text-blue-600 hover:text-blue-800 visited:text-purple-600">{children}</a>,
    ...components,
  }
}
