type Props = {
  author: string
  title: string
  imagePath: string
  description: string
  children: React.ReactNode
}

export default function BlogHeader(props: Props) {
  return <>
    <div>
      <h1 className="text-5xl text-center font-bold mb-4">{props.title}</h1>
      <img className="w-full" src={props.imagePath} />
      <h2 className="text-sm italic mt-2">{props.description}</h2>
      <div className="flex flex-row gap-2 items-center">
        <div className="py-4 flex flex-row gap-2 items-center">
          <img className="rounded-full w-6 h-6" width={"1.5rem"} height={"1.5rem"} src="/android-chrome-192x192.png" />
          <p>{props.author}</p>
        </div>
        <p>📆 Actualizado {new Date().getFullYear()}</p>
      </div>
      <article className="leading-7 mt-4">{props.children}</article>
    </div>
  </>
}
