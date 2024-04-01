import Link from "next/link";

export default function EsBlog() {
    return <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Blog Español
        </h1>
        <div className="flex flex-col gap-2 items-center justify-center">
            <Link className="text-3xl font-bold" href={"/es/blog/articulo-de-ejemplo-1"}>Articulo de ejemplo 1</Link>
        </div>
    </div>
}
