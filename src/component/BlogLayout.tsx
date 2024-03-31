import Link from "next/link"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <div className="max-w-2xl">
      <article className="leading-7">{children}</article>
    </div>
  }
