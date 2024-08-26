"use client"
import Casts from "@/app/components/casts/Casts"
import NotFound from "@/app/not-found"
import CastsSkeleton from "@/app/components/casts/CastsSkeleton"
import { useSuspenseQuery } from "@tanstack/react-query"
import React, { Suspense, useState } from "react"
import HeaderImage from "@/app/components/DetailPageComponents/HeaderImage"
import TabItems from "@/app/components/DetailPageComponents/TabItems"
import { useRouteToSeason } from "@/app/utils/hooks/useRouteToSeason"
import { getSeason, getSeries } from "@/app/utils/actions/getSingleData"

const Page = ({
  params: { id, season },
}: {
  params: {
    id: number
    season: number
  }
}) => {
  const [tabItem, setTabItem] = useState("Episodes")
  const [currentSeason, setCurrentSeason] = useState({
    selected: false,
    season: season.toString(),
  })
  useRouteToSeason(id, currentSeason.season, currentSeason.selected)
  let seasons = []
  const episodeData = useSuspenseQuery({
    queryKey: [id + season + "episode"],
    queryFn: () =>
      getSeason({
        id,
        season,
      }),
  })
  const seasonData = useSuspenseQuery({
    queryKey: ["tv" + id],
    queryFn: () => getSeries(id),
  })
  if (!seasonData.data || !episodeData.data) {
    return <NotFound />
  } else {
    for (let i = 1; i <= seasonData.data.number_of_seasons; i++) {
      seasons.push(i)
    }
  }
  return (
    <div>
      <title>
        {seasonData.data.name} Season {season} | Next Movie
      </title>
      <HeaderImage
        backdropPath={episodeData.data.episodes![0].still_path!}
        genres={seasonData.data.genres!}
        isTvSeason={true}
        isTvSeries={true}
        firstAirDate={episodeData.data.air_date}
        title={`${seasonData.data.name} Season ${season}`}
        numberOfEpisodes={episodeData.data.episodes?.length}
        link={seasonData.data.homepage!}
        mediaType="TV Season"
        id={seasonData.data.id}
        posterPath={seasonData.data.poster_path!}
        
      />
      <div className="p-12">
        <div>
          <h1 className="text-white text-lg font-semibold">Overview</h1>
          <p className="text-[#9CA4AB] mt-3">
            {episodeData.data.overview != ""
              ? episodeData.data.overview
              : seasonData.data.overview}
          </p>
        </div>
        <div className="mt-5">
          <h1 className="text-white text-lg font-semibold">Top Cast</h1>
          <Suspense fallback={<CastsSkeleton />}>
            <Casts type="TvSeason" id={id} season={season} />
          </Suspense>
        </div>
        <TabItems
          tabItems={["Episodes", "Pictures", "Videos"]}
          item={tabItem}
          setItem={setTabItem}
          episodes={episodeData.data.episodes!}
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

export default Page
