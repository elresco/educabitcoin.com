import Link from "next/link"

export default function EsBlog() {
    return <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Blog Español
        </h1>
        <Link className="text-3xl hover:underline underline-offset-8" href="/blog/es/articulo-de-ejemplo-1">Articulo de ejemplo 1</Link>
        <Link className="text-3xl hover:underline underline-offset-8" href="/blog/es/articulo-de-ejemplo-2">Articulo de ejemplo 2</Link>
    </div>
}
