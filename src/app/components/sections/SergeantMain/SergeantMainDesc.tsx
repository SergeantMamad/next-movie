import CartDescription from "../../cartGeneral/CartDescription"
import MoreButtonsComponent from "../../cartGeneral/MoreButtonsComponent"

type SergeantMainDesc = {
  title: string
  desc: string
  mediaType: string
  id: string | number
  genres: number[]
  voteAverage: number
  posterPath:string
}

const SergeantMainDesc = ({
  title,
  desc,
  mediaType,
  id,
  genres,
  voteAverage,
  posterPath
}: SergeantMainDesc) => {
  return (
    <div className="flex flex-col gap-4 ml-auto w-full">
      <h1 className="font-bold text-white text-4xl lg:text-5xl">{title}</h1>
      <CartDescription
        genres={genres}
        mediaType={mediaType}
        voteAverage={voteAverage}
      />
      <p className="text-white text-[13px] text-justify w-[96%] lg:w-full">
        {desc}
      </p>
      <MoreButtonsComponent
        id={id.toString()}
        genres={genres}
        mediaType={mediaType}
        posterPath={posterPath}
        title={title}
        link={mediaType == "tv" ? `series/${id}` : `/movie/${id}`}
      />
    </div>
  )
}
export default SergeantMainDesc
