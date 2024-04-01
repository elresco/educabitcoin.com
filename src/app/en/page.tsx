import Link from "next/link";

export default function EnBlog() {
    return <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            English Blog
        </h1>
        <div className="flex flex-col gap-2 items-center justify-center">
            <Link className="text-3xl font-bold" href={"/en/blog/article-example-1"}>Article Example 1</Link>
            <Link className="text-3xl font-bold" href={"/en/blog/article-example-2"}>Article Example 2</Link>
        </div>
    </div>
}

