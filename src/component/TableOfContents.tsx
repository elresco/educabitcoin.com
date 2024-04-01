import Link from "next/link"
import React, { type ReactNode } from "react"
import { encodeElementId } from "~/common/utils"

type Props = {
    title: string
    children: React.ReactNode
}

type Ref = {
    id: string
    title: string
}

type SubProps = {
    h1s: Ref[]
} & Props

function TOC(props: SubProps) {
    return <div id="table-of-contents" className="w-full mb-8 bg-gray-100 px-4 py-3 text-left text-gray-800 break-words max-w-md rounded">
        <div className="mx-auto text-xl font-semibold">
            <strong>{props.title}</strong>
        </div>
        <ul className="mt-2 list-disc px-2 pl-6">
            {props.h1s.map((h1, i) => <li key={`toc-h-${i}`}>
                <Link className="cursor-pointer block hover:bg-gray-200 px-2 py-1 rounded" href={`#${h1.id}`}>{h1.title}</Link>
            </li>)}
        </ul>
    </div>
}

function extractH1(children: ReactNode): Ref[] {
    const headers: Ref[] = []
    React.Children.forEach(children, (child) => {

        if (!React.isValidElement(child)) {
            return
        }
        if (typeof child.type === "function" && (child.type.name === "h1" || child.type.name === "h2" || child.type.name === "h3")) {
            headers.push({
                // eslint-disable-next-line
                id: encodeElementId(child.props.children),
                // eslint-disable-next-line
                title: child.props.children,
            })
        }

        // eslint-disable-next-line
        if (child.props.children) {
            // eslint-disable-next-line
            headers.push(...extractH1(child.props.children))
        }
    })
    return headers
}

export default function TableOfContents(props: Props) {
    const h1s = extractH1(props.children)
    return <>
        <TOC {...props} h1s={h1s} />
        {props.children}
    </>
}
