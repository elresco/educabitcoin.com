import Link from "next/link"

export default function EnBlog() {
    return <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            English Blog
        </h1>
        <Link className="text-3xl hover:underline underline-offset-8" href="/blog/en/article-example-1">Articles Example 1</Link>
        <Link className="text-3xl hover:underline underline-offset-8" href="/blog/en/article-example-2">Articles Example 2</Link>
    </div>
}

