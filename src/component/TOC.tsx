"use client"

import Link from "next/link"
import { useState } from "react"

type Props = {
    title: string
    h1s: TOCRef[]
}

export type TOCRef = {
    id: string
    title: string
}

export function TOC(props: Props) {
    const [isOpen, setIsOpen] = useState(true)
    return <div id="table-of-contents" className="w-full mb-8 bg-gray-100 px-4 py-3 text-left text-gray-800 break-words max-w-md rounded">
        <div className="flex flex-row items-stretch justify-stretch">
            <div className="text-xl mr-auto font-semibold">
                <strong>{props.title}</strong>
            </div>
            {isOpen && <div className="cursor-pointer" onClick={() => setIsOpen(false)}>🔼</div>}
            {!isOpen && <div className="cursor-pointer" onClick={() => setIsOpen(true)}>🔽</div>}
        </div>
        {isOpen && <ul className="mt-2 list-disc px-2 pl-6">
            {props.h1s.map((h1, i) => <li key={`toc-h-${i}`}>
                <Link className="cursor-pointer block hover:bg-gray-200 px-2 py-1 rounded" href={`#${h1.id}`}>{h1.title}</Link>
            </li>)}
        </ul>}
    </div>
}