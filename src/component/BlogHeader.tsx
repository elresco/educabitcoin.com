import Link from "next/link"

type Props = {
  author: string
  title: string
  description: string
  children: React.ReactNode
}

export default function BlogHeader(props: Props) {
    return <div>
      <div className="flex flex-row gap-2 items-center">
        <div className="flex flex-row gap-2 items-center">
          <img className="rounded-full w-8 h-8" width={"2rem"} height={"2rem"} src="/android-chrome-192x192.png" />
          <p>{props.author}</p>
        </div>
        <p>📆 Actualizado {new Date().getFullYear()}</p>
      </div>
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <h2 className="text-xl">{props.description}</h2>
      <article className="leading-7">{props.children}</article>
    </div>
  }
