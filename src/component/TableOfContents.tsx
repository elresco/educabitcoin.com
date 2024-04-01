import React, { type ReactNode } from "react"

import { encodeElementId } from "~/common/utils"
import { TOC, type TOCRef } from "./TOC"

type Props = {
    title: string
    children: React.ReactNode
}

function extractH1(children: ReactNode): TOCRef[] {
    const headers: TOCRef[] = []
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
