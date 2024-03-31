import Link from "next/link"

export default function Blog() {
    return <div className="flex flex-col gap-10">
        <div className="flex flex-row gap-2 justify-center items-center">
            <h1 className="text-5xl font-bold">Blog</h1>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
            <Link className="text-3xl p-12 rounded-lg bg-orange-500 text-white font-bold border-2 border-orange-500 hover:bg-white hover:text-orange-500" href="/blog/es">🇪🇸🇲🇽 Español</Link>
            <Link className="text-3xl p-12 rounded-lg bg-blue-500 text-white font-bold border-2 border-blue-500 hover:bg-white hover:text-blue-500" href="/blog/en">🇬🇧🇺🇸 English</Link>
        </div>
    </div>
}
