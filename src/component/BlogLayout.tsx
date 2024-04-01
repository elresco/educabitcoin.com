export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-center">
    <article className="max-w-2xl leading-7">{children}</article>
  </div>
}
