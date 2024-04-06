type Props = {
  author: string
  title: string
  imagePath: string
  subtitulo?: string
  updatedAt: string
  children: React.ReactNode
}

export default function BlogHeader(props: Props) {
  return <>
    <div>
      <h1 className="text-5xl text-center font-black mb-4">{props.title}</h1>
      <img alt="article-featured-image" className="w-full" src={props.imagePath} />
      {props.subtitulo && <h2 className="text-sm italic mt-2">{props.subtitulo}</h2>}
      <div className="flex flex-row gap-2 items-center">
        <div className="py-4 flex flex-row gap-2 items-center">
          <img alt="header-logo" className="rounded-full w-6 h-6" width={"1.5rem"} height={"1.5rem"} src="/android-chrome-192x192.png" />
          <p>{props.author}</p>
        </div>
        <p>{props.updatedAt}</p>
      </div>
      <article className="leading-7 mt-4">{props.children}</article>
    </div>
  </>
}
