"use client"
import { MainWeekTrending } from "@/action"
import { useSuspenseQuery } from "@tanstack/react-query"
import TrendingCard from "./TrendingCard"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
import useSwipe from "@/app/utils/hooks/useSwipe"
import { useObserveElementWidth } from "@/app/utils/hooks/useObserveElementWidth"
import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight"

const WeekTrending = ({ cat }: { cat: "movie" | "tv" | "all" }) => {
  const { ref: divRef, width } = useObserveElementWidth<HTMLDivElement>()
  const {onTouchEnd,onTouchMove,onTouchStart} = useSwipe({
    onSwipedLeft: () => scrollLeftRight(divRef,"left",width + 16),
    onSwipedRight:  () => scrollLeftRight(divRef,"right",width + 16)
  })
  const { data } = useSuspenseQuery({
    queryKey: ["WeekTrending" + cat],
    queryFn: () => MainWeekTrending(cat),
  })

  return (
    <div className="relative">
      <ScrollButtons ref={divRef} value={width + 16} />
      <div
        className="flex mt-10 gap-4 overflow-hidden scroll-smooth cards"
        ref={divRef}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
      >
        {data?.map((res, index) =>
          res.vote_average == 0.0 ? null : (
            <TrendingCard
              id={res.id}
              mediaType={res.media_type!}
              posterPath={res.poster_path!}
              title={(res as any).title! || (res as any).name}
              voteAverage={res.vote_average}
              type="main"
              key={index}
              genres={res.genre_ids!}
            />
          )
        )}
      </div>
    </div>
  )
}

export default WeekTrending
