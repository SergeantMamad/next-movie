import { getSeries } from "@/action"
import Image from "next/image"
import MoreButtonsComponent from "../cartGeneral/MoreButtonsComponent"

const SingleFetch = async () => {
  const data = await getSeries(46648)
  return (
    <div className="relative w-full h-[650px]">
      <div className={`middleSlide active`}>
        <Image
          fill
          src={`https://image.tmdb.org/t/p/w1280${data?.backdrop_path}`}
          className="object-cover object-top"
          alt=""
        />
        <div className="absolute left-12 bottom-48">
          <p className="py-1 px-6 rounded-[20px] bg-black text-white w-fit font-medium">
            Recommended By NEXT MOVIE Team
          </p>
          <h1 className="font-bold text-white text-5xl mt-4">{data?.name}</h1>
          <p className="text-white text-sm w-1/3 mt-4 text-justify">
            {data?.overview}
          </p>
          <MoreButtonsComponent link={`series/${data?.id}`} />
        </div>
      </div>
    </div>
  )
}
export default SingleFetch
