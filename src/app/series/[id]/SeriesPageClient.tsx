"use client"
import { Suspense, useState } from "react"
import CastsSkeleton from "@/app/components/casts/CastsSkeleton"
import Casts from "@/app/components/casts/Casts"
import Discover from "@/app/components/sections/Discover/DiscoverMain"
import DiscoverMainSkeleton from "@/app/components/sections/Discover/DiscoverMainSkeleton"
import HeaderImage from "@/app/components/DetailPageComponents/HeaderImage"
import TabItems from "@/app/components/DetailPageComponents/TabItems"
import { useRouteToSeason } from "@/app/utils/hooks/useRouteToSeason"
import { getSeries } from "@/app/utils/actions/getSingleData"

type Series = NonNullable<Awaited<ReturnType<typeof getSeries>>>

export default function SeriesPageClient({
  id,
  data
}: {
  id: number
  data: Series
}) {
  const [tabItem, setTabItem] = useState("Seasons")
  const [season, setSeason] = useState("")
  useRouteToSeason(id, season)
  const seasons = Array.from(
    { length: data.number_of_seasons },
    (_, index) => index + 1
  )

  return (
    <div>
      <HeaderImage
        backdropPath={data.backdrop_path!}
        genres={data.genres!}
        isTvSeason={false}
        isTvSeries={true}
        title={data.name!}
        firstAirDate={data.first_air_date}
        numberOfSeasons={data.number_of_seasons}
        link={data.homepage!}
        mediaType="TV"
        id={id}
        posterPath={data.poster_path!}
      />
      <div className="p-6 xl:p-12">
        <div>
          <h1 className="text-white text-lg font-semibold">Overview</h1>
          <p className="text-[#9CA4AB] mt-4">{data.overview}</p>
        </div>
        <div className="mt-5 space-y-4">
          <h1 className="text-white text-lg font-semibold">Top Cast</h1>
          <Suspense fallback={<CastsSkeleton />}>
            <Casts type="tv" id={id} season={0} />
          </Suspense>
        </div>
        <TabItems
          tabItems={["Seasons", "Pictures", "Videos"]}
          item={tabItem}
          setItem={setTabItem}
          id={id}
          season={season}
          seasons={seasons}
          setSeason={setSeason}
          mediaType="tv"
        />
      </div>
      <div className="border-t border-gray-700 p-0"></div>
      <div className="p-12">
        <div className="space-y-4">
          <h1 className="text-white text-2xl font-bold">Similar TV Series</h1>
          <Suspense fallback={<DiscoverMainSkeleton />}>
            <Discover cat="SimilarTv" id={id} filter={null} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
