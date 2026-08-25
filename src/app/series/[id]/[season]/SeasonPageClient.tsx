"use client"
import { Suspense, useState } from "react"
import Casts from "@/app/components/casts/Casts"
import CastsSkeleton from "@/app/components/casts/CastsSkeleton"
import HeaderImage from "@/app/components/DetailPageComponents/HeaderImage"
import TabItems from "@/app/components/DetailPageComponents/TabItems"
import { useRouteToSeason } from "@/app/utils/hooks/useRouteToSeason"
import type { getSeason, getSeries } from "@/app/utils/actions/getSingleData"

type EpisodeData = NonNullable<Awaited<ReturnType<typeof getSeason>>>
type Series = NonNullable<Awaited<ReturnType<typeof getSeries>>>

export default function SeasonPageClient({
  id,
  season,
  episodeData,
  seriesData
}: {
  id: number
  season: number
  episodeData: EpisodeData
  seriesData: Series
}) {
  const [tabItem, setTabItem] = useState("Episodes")
  const [currentSeason, setCurrentSeason] = useState({
    selected: false,
    season: season.toString()
  })
  useRouteToSeason(id, currentSeason.season, currentSeason.selected)
  const seasons = Array.from(
    { length: seriesData.number_of_seasons },
    (_, index) => index + 1
  )

  return (
    <div>
      <HeaderImage
        backdropPath={episodeData.episodes![0].still_path!}
        genres={seriesData.genres!}
        isTvSeason={true}
        isTvSeries={true}
        firstAirDate={episodeData.air_date}
        title={`${seriesData.name} Season ${season}`}
        numberOfEpisodes={episodeData.episodes?.length}
        link={seriesData.homepage!}
        mediaType="TV Season"
        id={seriesData.id}
        posterPath={seriesData.poster_path!}
      />
      <div className="p-12">
        <div>
          <h1 className="text-white text-lg font-semibold">Overview</h1>
          <p className="text-[#9CA4AB] mt-4">
            {episodeData.overview != ""
              ? episodeData.overview
              : seriesData.overview}
          </p>
        </div>
        <div className="mt-5 space-y-4">
          <h1 className="text-white text-lg font-semibold">Top Cast</h1>
          <Suspense fallback={<CastsSkeleton />}>
            <Casts type="TvSeason" id={id} season={season} />
          </Suspense>
        </div>
        <TabItems
          tabItems={["Episodes", "Pictures", "Videos"]}
          item={tabItem}
          setItem={setTabItem}
          episodes={episodeData.episodes!}
          id={id}
          mediaType="TvSeason"
          season={currentSeason.season}
          seasons={seasons}
          setCurrentSeason={setCurrentSeason}
        />
      </div>
    </div>
  )
}
