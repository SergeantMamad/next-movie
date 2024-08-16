"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import { Suspense, useState } from "react"
import Casts from "@/app/components/casts/Casts"
import { getMovie } from "../../../action"
import "@fortawesome/fontawesome-svg-core/styles.css"
import CastsSkeleton from "@/app/components/casts/CastsSkeleton"
import Discover from "@/app/components/sections/Discover/DiscoverMain"
import DiscoverMainSkeleton from "@/app/components/sections/Discover/DiscoverMainSkeleton"
import NotFound from "@/app/not-found"
import HeaderImage from "@/app/components/DetailPageComponents/HeaderImage"
import TabItems from "@/app/components/DetailPageComponents/TabItems"
const Page = ({
  params: { id },
}: {
  params: {
    id: number
  }
}) => {
  const [selected, setSelected] = useState("More Info")

  const { data, error } = useSuspenseQuery({
    queryKey: ["movie" + id],
    queryFn: () => getMovie(id),
  })
  if (error || !data) {
    return <NotFound />
  }
  return (
    <div>
      <title>{data.original_title}</title>
      <HeaderImage
        backdropPath={data.backdrop_path!}
        genres={data.genres!}
        isTvSeason={false}
        isTvSeries={false}
        releaseDate={data.release_date!}
        title={data.original_title!}
        runtime={data.runtime}
        link={data.homepage!}
        mediaType="Movie"
      />
      <div className="p-12">
        <div>
          <h1 className="text-white text-lg font-semibold">Overview</h1>
          <p className="text-[#9CA4AB] mt-3">{data.overview}</p>
        </div>
        <div className="mt-5">
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
        <div>
          <h1 className="text-white text-2xl font-bold">Similar Movies</h1>
          <Suspense fallback={<DiscoverMainSkeleton />}>
            <Discover cat="SimilarMovie" id={id} filter={null} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Page
