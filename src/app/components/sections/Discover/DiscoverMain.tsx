"use client"
import { useRef } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { categoris, DiscoverMain } from "@/action"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
import DiscoverMainCard from "./DiscoverMainCard"
import { operations } from "../../../../../schema"
import { useObserveElementWidth } from "@/app/utils/hooks/useObserveElementWidth"
import useSwipe from "@/app/utils/hooks/useSwipe"
import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight"
type DiscoverProps = {
  cat: categoris
  id: number
  filter:
    | operations["discover-movie"]["parameters"]["query"]
    | operations["discover-tv"]["parameters"]["query"]
    | null
}
const Discover = ({ cat, id, filter }: DiscoverProps) => {
  const { ref: divRef, width } = useObserveElementWidth<HTMLDivElement>()
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe({
    onSwipedLeft: () => scrollLeftRight(divRef, "left", width + 16),
    onSwipedRight: () => scrollLeftRight(divRef, "right", width + 16),
  })

  const { data } = useSuspenseQuery({
    queryKey: [cat + id],
    queryFn: () =>
      DiscoverMain({
        cat,
        id,
        filter,
      }),
  })
  if (data?.length == 0) {
    return (
      <div className="flex h-[220px] items-center justify-center">
        <p className="text-white text-3xl font-semibold">
          We currently dont have anything for you :({" "}
        </p>
      </div>
    )
  }
  return (
    <div className="relative">
      <ScrollButtons ref={divRef} value={width + 16} />
      <div
        className="flex mt-4 gap-4 overflow-hidden scroll-smooth"
        ref={divRef}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
      >
        {data?.map((res, index) => (
          <DiscoverMainCard
            id={res.id}
            cat={cat}
            title={(res as any).title || (res as any).name}
            backdropPath={res.backdrop_path!}
            voteAverage={res.vote_average}
            mediaType={cat}
            genres={res.genre_ids!}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Discover
