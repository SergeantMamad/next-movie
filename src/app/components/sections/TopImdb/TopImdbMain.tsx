"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import { TopImdb } from "@/action"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
import TopImdbMainCart from "./TopImdbMainCart"
import { useObserveElementWidth } from "@/app/utils/hooks/useObserveElementWidth"
import useSwipe from "@/app/utils/hooks/useSwipe"
import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight"

const TopImdbMain = () => {
  const { ref: divRef, width } = useObserveElementWidth<HTMLDivElement>()
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe({
    onSwipedLeft: () => scrollLeftRight(divRef, "left", divRef.current?.offsetWidth!),
    onSwipedRight: () => scrollLeftRight(divRef, "right", divRef.current?.offsetWidth!),
  })

  const { data } = useSuspenseQuery({
    queryKey: ["TopImdb"],
    queryFn: TopImdb,
  })
  return (
    <div className="relative">
      <div
        className="flex max-w-screen xl:w-[540px] h-max mt-4 overflow-x-hidden scroll-smooth"
        ref={divRef}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
      >
        <ScrollButtons ref={divRef} value={divRef.current?.offsetWidth!} />
        {data?.map((res, index) => (
          <TopImdbMainCart
            backdropPath={res.backdrop_path!}
            overview={res.overview!}
            releaseDate={res.release_date!}
            title={res.title!}
            voteAverage={res.vote_average}
            genres={res.genre_ids!}
            id={res.id}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default TopImdbMain
