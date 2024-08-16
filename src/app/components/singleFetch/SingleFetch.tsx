import { getSeries } from "@/action"
import SingleFetchCard from "./SingleFetchCard"

const SingleFetch = async () => {
  const data = await getSeries(46648)
  return (
    <SingleFetchCard backdropPath={data?.backdrop_path!} id={data?.id!} name={data?.name!} overview={data?.overview!}/>
  )
}
export default SingleFetch
