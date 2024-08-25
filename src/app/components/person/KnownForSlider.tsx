import { useRef } from "react"
import ScrollButtons from "../cartGeneral/ScrollButtons"
import ResultComponent from "../search/ResultComponent"
import { operations } from "../../../../schema"

type KnownForSliderProps = {
  works:
    | operations["person-combined-credits"]["responses"]["200"]["content"]["application/json"]["cast"]
    | operations["person-combined-credits"]["responses"]["200"]["content"]["application/json"]["crew"]
}

const KnownForSlider = ({ works }: KnownForSliderProps) => {
  const episodeRef = useRef(null)
  return (
    <div className="relative">
      <ScrollButtons ref={episodeRef} value={315} />
      <div
        className="flex mt-10 overflow-hidden scroll-smooth gap-1"
        ref={episodeRef}
      >
        {works!
          .sort(
            (a, b) =>
              (b.vote_count * b.vote_average) /
                ((b as any).order <= 10 || (b as any).order == null ? 1 : (b as any).order) -
              (a.vote_count * a.vote_average) /
                ((a as any).order <= 10 || (a as any).order == null ? 1 : (a as any).order)
          )
          .slice(0, 11)
          .map((work, index) => (
            <ResultComponent
              id={work!.id}
              mediaType={work!.media_type!}
              posterPath={work!.poster_path!}
              title={work!.title! || (work as any).name}
              voteAverage={work!.vote_average}
              releaseDate={work!.release_date}
              firstAirDate={(work as any).first_air_date}
              genres={work.genre_ids!}
              isInSearch={false}
              job={(work as any).character || (work as any).job}
              key={index}
            />
          ))}
      </div>
    </div>
  )
}
export default KnownForSlider
