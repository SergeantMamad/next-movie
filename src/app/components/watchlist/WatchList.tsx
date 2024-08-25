import { useContext } from "react"
import ResultComponent from "../search/ResultComponent"
import TrendingCard from "../sections/TodaysTrending/TrendingCard"
import { StorageContext } from "@/app/utils/context/storageContext"

const WatchList = ({mediaType,isLarge}:{
    mediaType:string
    isLarge:boolean
}) => {
  const context = useContext(StorageContext)    
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      {context?.items?.filter((item) => item.mediaType == "tv").length != 0 ? (
        context?.items
          ?.filter((item) => item.mediaType == "tv")
          .map((items, index) => {
            return isLarge ? (
              <TrendingCard
                type="search"
                id={parseInt(items.id)}
                mediaType={"tv"}
                posterPath={items.poster!}
                title={items.title!}
                genres={items.genres}
                key={index}
              />
            ) : (
              <ResultComponent
                isInSearch={true}
                id={parseInt(items.id)}
                mediaType={mediaType}
                posterPath={items.poster!}
                title={items.title!}
                genres={items.genres}
                key={index}
              />
            )
          })
      ) : (
        <p className="col-span-4 text-center font-bold text-3xl h-[100px]">
          You Have No Item In Your TV Series List
        </p>
      )}
    </div>
  )
}
export default WatchList
