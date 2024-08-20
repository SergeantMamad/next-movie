import Image from "next/image"
import MoreButtonsComponent from "../cartGeneral/MoreButtonsComponent"

type TopSellingCardProps = {
  backdropPath: string
  title: string
  overview: string
  id: number
}

const TopSellingCard = ({
  backdropPath,
  title,
  overview,
  id,
}: TopSellingCardProps) => {
  return (
    <div className="w-full xl:w-[32%] h-[350px] relative">
      <Image
        src={`https://image.tmdb.org/t/p/w780${backdropPath}`}
        className="object-cover rounded-lg brightness-50"
        fill
        alt=""
      />
      <div className="absolute flex flex-col pl-5 bottom-3 gap-2">
        <p className="text-3xl font-bold">{title}</p>
        <p className="text-xs font-semibold line-clamp-2">{overview}</p>
        <div className="w-[95%] xl:w-auto">
          <MoreButtonsComponent link={`/movie/${id}`} />
        </div>
      </div>
    </div>
  )
}
export default TopSellingCard
