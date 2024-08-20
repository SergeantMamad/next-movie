"use client"
import { useRef } from "react"
import ScrollButtons from "../cartGeneral/ScrollButtons"
import EpisodesCard from "./EpisodesCard"
import { operations } from "../../../../schema"

type EpisodesProps = {
  episodes:operations['tv-episode-details']['responses']['200']['content']['application/json'][]
}

const Episodes = ({ episodes }: EpisodesProps) => {
  const episodeRef = useRef(null)

  return (
    <div className="relative mt-30">
      <ScrollButtons ref={episodeRef} value={315} />
      <div
        className="flex mt-10 overflow-hidden scroll-smooth gap-3"
        ref={episodeRef}
      >
        {episodes.map((episode, index) => (
          <EpisodesCard episodeNumber={index+1} name={episode.name!} overview={episode.overview!} stillPath={episode.still_path!} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Episodes
