type Props = {
    url: string
    title: string
}

export default function VideoEmbed(props: Props) {
    return <div className="flex items-center justify-center my-6">
        <iframe width="560" height="315" src={props.url} title={props.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
    </div>
}
