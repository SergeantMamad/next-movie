"use client"
import { useRef } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { getCasts, types } from "../../../action"
import ScrollButtons from "../cartGeneral/ScrollButtons"
import CastsCard from "./CastsCard"

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
  const divRef = useRef(null)

  return (
    <div className="relative">
      <ScrollButtons ref={divRef} value={325} />
      <div
        className="flex mt-4 gap-10 overflow-hidden scroll-smooth"
        ref={divRef}
      >
        {data?.map((cast, index) => (
          <CastsCard name={cast.name!} profilePath={cast?.profile_path} character={(cast as any)?.character} roles={(cast as any)?.roles} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Casts
