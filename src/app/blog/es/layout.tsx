import BlogLayout from "~/component/BlogLayout"
import "~/styles/globals.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BlogLayout children={children}></BlogLayout>
}
