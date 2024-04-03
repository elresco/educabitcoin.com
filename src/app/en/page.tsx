import Link from "next/link";

export default function EnBlog() {
    return <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            English Blog
        </h1>
        <div className="flex flex-col gap-2 items-center justify-center">
            <Link className="text-3xl font-bold" href={"/en/blog/book-1/1-difference-between-money-and-value"}>Difference between money and value</Link>
            <Link className="text-3xl font-bold" href={"/en/blog/book-1/2-cantillion-effect-and-the-broken-social-elevator"}>Efecto Cantillion and the broken social elevator</Link>
            <Link className="text-3xl font-bold" href={"/en/blog/book-1/3-how-abundant-is-fiat-with-numbers"}>How extremely abundant is fiat. With numbers</Link>
        </div>
    </div>
}

