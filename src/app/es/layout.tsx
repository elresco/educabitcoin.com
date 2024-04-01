import "~/styles/globals.css"

import Link from "next/link"
import BlogLayout from "~/component/BlogLayout"

export default function Layout(props: { children: React.ReactNode }) {
  return <>
    <div className="flex py-2 px-8 items-center justify-end gap-4">
      <Link className="text-xl font-bold hover:underline underline-offset-8" href="/es">ARTICULOS</Link>
      <Link className="text-xl font-bold hover:underline underline-offset-8" href="/en">ENGLISH</Link>
    </div>
    <BlogLayout>{props.children}</BlogLayout>
  </>
}
