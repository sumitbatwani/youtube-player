import React from "react"

type Props = {
    embedId: string;
    title: string;
    width: string;
    height: string;
}
const YouTubeEmbedPlayer: React.FC<Props> = ({
    embedId,
    title,
    width,
    height,
}) => {
    return (
        <div>
            <iframe
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${embedId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    )
}

export default YouTubeEmbedPlayer;