"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import ScrollButtons from "../cartGeneral/ScrollButtons"
import CastsCard from "./CastsCard"
import { useObserveElementWidth } from "@/app/utils/hooks/useObserveElementWidth"
import useSwipe from "@/app/utils/hooks/useSwipe"
import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight"
import { types } from "@/app/utils/actions/config"
import { getCasts } from "@/app/utils/actions/getSingleData"

const Casts = ({
  type,
  id,
  season,
}: {
  type: types
  id: number
  season: number
}) => {
  const { data } = useSuspenseQuery({
    queryKey: [type + id + (season ? season : 0) + "casts"],
    queryFn: () => getCasts({ type, id, season }),
  })
  const { ref: divRef, width } = useObserveElementWidth<HTMLDivElement>()
  
  const {onTouchEnd,onTouchMove,onTouchStart} = useSwipe({
    onSwipedLeft: () => scrollLeftRight(divRef,"left",width + 12),
    onSwipedRight:  () => scrollLeftRight(divRef,"right",width + 12)
  })

  return (
    <div className="relative">
      <ScrollButtons ref={divRef} value={width + 12} />
      <div
        className="flex mt-4 gap-3 overflow-hidden scroll-smooth"
        ref={divRef}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
      >
        {data?.map((cast, index) => (
          <CastsCard name={cast.name!} profilePath={cast?.profile_path} character={(cast as any)?.character} roles={(cast as any)?.roles} key={index} id={cast.id}/>
        ))}
      </div>
    </div>
  )
}

export default Casts
