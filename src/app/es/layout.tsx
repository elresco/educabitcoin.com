import Link from "next/link"
import BlogLayout from "~/component/BlogLayout"
import "~/styles/globals.css"

export default function Layout(props: { children: React.ReactNode }) {
  return <>
    <header className="flex py-2 px-8 items-center justify-end gap-4">
      <Link className="text-xl font-bold hover:underline underline-offset-8" href="/es">INICIO</Link>
      <Link className="text-xl font-bold hover:underline underline-offset-8" href="/en/blog">ENGLISH</Link>
    </header>
    <BlogLayout>{props.children}</BlogLayout>
  </>
}
