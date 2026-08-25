"use client"
import { Suspense, useState } from "react"
import Casts from "@/app/components/casts/Casts"
import "@fortawesome/fontawesome-svg-core/styles.css"
import CastsSkeleton from "@/app/components/casts/CastsSkeleton"
import Discover from "@/app/components/sections/Discover/DiscoverMain"
import DiscoverMainSkeleton from "@/app/components/sections/Discover/DiscoverMainSkeleton"
import HeaderImage from "@/app/components/DetailPageComponents/HeaderImage"
import TabItems from "@/app/components/DetailPageComponents/TabItems"
import type { getMovie } from "@/app/utils/actions/getSingleData"

type Movie = NonNullable<Awaited<ReturnType<typeof getMovie>>>

type MoviePageClientProps = {
  id: number
  data: Movie
}

export default function MoviePageClient({ id, data }: MoviePageClientProps) {
  const [selected, setSelected] = useState("More Info")

  return (
    <div>
      <HeaderImage
        backdropPath={data.backdrop_path!}
        genres={data.genres!}
        isTvSeason={false}
        isTvSeries={false}
        releaseDate={data.release_date!}
        title={data.title!}
        runtime={data.runtime}
        link={data.homepage!}
        mediaType="Movie"
        posterPath={data.poster_path!}
        id={data.id}
      />
      <div className="p-12">
        <div>
          <h1 className="text-white text-lg font-semibold">Overview</h1>
          <p className="text-[#9CA4AB] mt-4">{data.overview}</p>
        </div>
        <div className="mt-5 space-y-4">
          <h1 className="text-white text-lg font-semibold">Top Cast</h1>
          <Suspense fallback={<CastsSkeleton />}>
            <Casts type="movie" id={id} season={0} />
          </Suspense>
        </div>
        <TabItems
          tabItems={["More Info", "Pictures", "Videos"]}
          setItem={setSelected}
          item={selected}
          mediaType="movie"
          id={id}
          moreInfoData={{
            budget: data.budget,
            language: data.original_language!,
            productionCompanies: data.production_companies!,
            productionCountries: data.production_countries!,
            releaseDate: data.release_date!,
            revenue: data.revenue,
            voteAverage: data.vote_average,
          }}
        />
      </div>
      <div className="border-t border-gray-700 p-0"></div>
      <div className="p-12">
        <div className="space-y-4">
          <h1 className="text-white text-2xl font-bold">Similar Movies</h1>
          <Suspense fallback={<DiscoverMainSkeleton />}>
            <Discover cat="SimilarMovie" id={id} filter={null} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
