import Image from "next/image"

type EpisodesCardProps = {
    stillPath:string
    episodeNumber:number
    overview:string
    name:string
}

const EpisodesCard = ({
    stillPath,
    episodeNumber,
    overview,
    name
}:EpisodesCardProps) => {
  return (
    <div className="min-w-[320px] flex flex-col gap-1">
      <div className="w-[320px] h-[200px] relative">
        <Image
          fill
          alt=""
          className="rounded-2xl object-cover"
          src={`https://image.tmdb.org/t/p/w780${stillPath}`}
        />
        <div className="absolute bottom-0 p-2 flex flex-col gap-1">
          <h1 className="font-semibold">Episode {episodeNumber}</h1>
          <p className="text-xs w-[310px] line-clamp-2 text-gray-200 shadow-lg drop-shadow-[0_0.5px_1.5px_rgba(0,0,0,1)]">
            {overview}
          </p>
        </div>
      </div>
      <p className="text-white font-bold truncate w-[320px] mx-auto">
        {name}
      </p>
    </div>
  )
}
export default EpisodesCard
