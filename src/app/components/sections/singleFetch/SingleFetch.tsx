import { getSeries } from "@/app/utils/actions/getSingleData"
import SingleFetchCard from "./SingleFetchCard"

const SingleFetch = async () => {
  const data = await getSeries(46648)
  return (
    <SingleFetchCard
      genres={data?.genres?.map((genre) => genre.id)!}
      posterPath={data?.poster_path!}
      backdropPath={data?.backdrop_path!}
      id={data?.id!}
      name={data?.name!}
      overview={data?.overview!}
    />
  )
}
export default SingleFetch
