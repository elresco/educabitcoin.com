type Props = {
  content: string
  author?: string
}

export default function Blockquote(props: Props) {
  return <blockquote className="flex flex-row gap-2">
    <img className="w-20 h-20" width={"5rem"} height={"5rem"} src="/img/quote-icon.png" alt="quote-icon" />
    <div className="w-full mt-10 pt-4 px-4 border-s-4 border-gray-300 bg-gray-200">
      <div>{props.content}</div>
      {props.author && <div className="text-end font-bold">- {props.author}</div>}
    </div>
  </blockquote>
}
