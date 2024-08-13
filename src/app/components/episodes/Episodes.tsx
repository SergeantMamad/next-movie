"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import ScrollButtons from "../cartGeneral/ScrollButtons"
import EpisodesCard from "./EpisodesCard"

type EpisodesProps = {
  episodes:
    | {
        air_date?: string
        episode_number: number
        id: number
        name?: string
        overview?: string
        production_code?: string
        runtime: number
        season_number: number
        show_id: number
        still_path?: string
        vote_average: number
        vote_count: number
        crew?: {
          department?: string
          job?: string
          credit_id?: string
          adult: boolean
          gender: number
          id: number
          known_for_department?: string
          name?: string
          original_name?: string
          popularity: number
          profile_path?: string
        }[]
        guest_stars?: {
          character?: string
          credit_id?: string
          order: number
          adult: boolean
          gender: number
          id: number
          known_for_department?: string
          name?: string
          original_name?: string
          popularity: number
          profile_path?: string
        }[]
      }[]
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
          <EpisodesCard episodeNumber={index+1} name={episode.name!} overview={episode.overview!} stillPath={episode.still_path!}/>
        ))}
      </div>
    </div>
  )
}

export default Episodes
