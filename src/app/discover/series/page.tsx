import CustomH1 from "@/app/components/other/CustomH1"
import ShowMoreSection from "@/app/components/other/ShowMoreSection"
import Discover from "@/app/components/sections/Discover/DiscoverMain"
import DiscoverMainSkeleton from "@/app/components/sections/Discover/DiscoverMainSkeleton"
import Popular from "@/app/components/sections/PopularOfDay/Popular"
import PopularSkeleton from "@/app/components/sections/PopularOfDay/PopularSkeleton"
import WeekTrending from "@/app/components/sections/TodaysTrending/WeekTrending"
import WeekTrendingSkeleton from "@/app/components/sections/TodaysTrending/WeekTrendingSkeleton"
import RecommendationImageSkeleton from "@/app/components/sections/categoryRecommendation/RecommendationImageSkeleton"
import Recommendations from "@/app/components/sections/categoryRecommendation/Recommendations"
import SingleFetch from "@/app/components/sections/singleFetch/SingleFetch"
import SingleFetchSkeleton from "@/app/components/sections/singleFetch/SingleFetchSkeleton"
import Slider from "@/app/components/sections/slider/Slider"
import SliderSkeleton from "@/app/components/sections/slider/SliderSkeleton"
import { Metadata } from "next"
import { Suspense } from "react"
export const metadata: Metadata = {
  title: 'Discover Series',
}
const Page = () => {
  return (
    <main>
      <Suspense fallback={<SliderSkeleton />}>
        <Slider listNumber={8309952} />
      </Suspense>
      <div className="p-12">
        <CustomH1 title="Popular Series Of This Week" />
        <Suspense fallback={<PopularSkeleton />}>
          <Popular cat="tv" />
        </Suspense>
        <CustomH1 title="Trending Series This Week" />
        <Suspense fallback={<WeekTrendingSkeleton />}>
          <WeekTrending cat="tv" />
        </Suspense>
      </div>
      <Suspense fallback={<SingleFetchSkeleton />}>
        <SingleFetch />
      </Suspense>
      <div className="p-12">
        <ShowMoreSection
          title="Best Shows From 2000s"
          href="/advancedsearch/tv?sortBy=first_air_date.desc&releaseDate=2000-01-01_2009-12-30&voteCount=4000-&country=US"
        />
        <Suspense fallback={<DiscoverMainSkeleton />}>
          <Discover
            id={9}
            cat="tv"
            filter={{
              "first_air_date.gte": "2000-01-01",
              "first_air_date.lte": "2009-12-30",
              sort_by: "first_air_date.desc",
              "vote_count.gte": 4000,
              with_origin_country: "US",
              page: 1,
            }}
          />
        </Suspense>
        <ShowMoreSection
          title="Category : Crime & Drama"
          href="/advancedsearch/tv?sortBy=vote_average.desc&genres=18-80&voteCount=1500-&ratings=8-&country=US"
        />
        <Suspense fallback={<DiscoverMainSkeleton />}>
          <Discover
            id={10}
            cat="tv"
            filter={{
              "vote_count.gte": 1500,
              "vote_average.gte": 8,
              sort_by: "vote_average.desc",
              with_genres: "18,80",
              with_origin_country: "US",
              page: 1,
            }}
          />
        </Suspense>
        <ShowMoreSection
          title="Best Of JP"
          href="/advancedsearch/tv?sortBy=vote_count.desc&ratings=8-&country=JP"
        />
        <Suspense fallback={<DiscoverMainSkeleton />}>
          <Discover
            id={11}
            cat="tv"
            filter={{
              "vote_average.gte": 8,
              sort_by: "vote_count.desc",
              with_origin_country: "JP",
              page: 1,
            }}
          />
        </Suspense>
      </div>
      <Suspense fallback={<RecommendationImageSkeleton />}>
        <Recommendations mainCategory="tv" />
      </Suspense>
    </main>
  )
}
export default Page
