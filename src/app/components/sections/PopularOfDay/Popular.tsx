"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import PopularCard from "./PopularCard"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
import useSwipe from "@/app/utils/hooks/useSwipe"
import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight"
import { useObserveElementWidth } from "@/app/utils/hooks/useObserveElementWidth"
import { getTodayPopularList } from "@/app/utils/actions/sectionsAuction"

const Popular = ({ cat }: { cat: "movie" | "tv" }) => {
  const { ref: divRef, width } = useObserveElementWidth<HTMLDivElement>()
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe({
    onSwipedLeft: () => scrollLeftRight(divRef, "right", width + 16),
    onSwipedRight: () => scrollLeftRight(divRef, "left", width + 16),
  })

  const { data } = useSuspenseQuery({
    queryKey: ["todayPopular"],
    queryFn: () => getTodayPopularList(cat),
  })
  return (
    <div className="relative">
      <ScrollButtons ref={divRef} value={width + 16} />
      <div
        className="flex mt-10 gap-4 overflow-hidden scroll-smooth Card-Popular"
        ref={divRef}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
      >
        {data?.map((res, index) => (
          <PopularCard
            id={res.id}
            index={index}
            title={(res as any).title! || (res as any).name!}
            posterPath={res.poster_path!}
            mediaType={cat}
            voteAverage={res.vote_average}
            key={index}
            genres={res.genre_ids!}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
