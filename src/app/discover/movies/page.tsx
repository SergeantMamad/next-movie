import CustomH1 from "@/app/components/other/CustomH1"
import ShowMoreSection from "@/app/components/other/ShowMoreSection"
import Discover from "@/app/components/sections/Discover/DiscoverMain"
import DiscoverMainSkeleton from "@/app/components/sections/Discover/DiscoverMainSkeleton"
import WeekTrending from "@/app/components/sections/TodaysTrending/WeekTrending"
import WeekTrendingSkeleton from "@/app/components/sections/TodaysTrending/WeekTrendingSkeleton"
import RecommendationImageSkeleton from "@/app/components/sections/categoryRecommendation/RecommendationImageSkeleton"
import Recommendations from "@/app/components/sections/categoryRecommendation/Recommendations"
import Slider from "@/app/components/sections/slider/Slider"
import SliderSkeleton from "@/app/components/sections/slider/SliderSkeleton"
import TopSellingSection from "@/app/components/sections/topSellingSection/TopSellingSection"
import TopSellingSkeleton from "@/app/components/sections/topSellingSection/TopSellingSkeleton"
import { Metadata } from "next"
import { Suspense } from "react"
export const metadata: Metadata = {
  title: 'Discover Movies',
}
const Page = () => {
  return (
    <main>
      <Suspense fallback={<SliderSkeleton />}>
        <Slider listNumber={8309849} />
      </Suspense>
      <div className="p-6 xl:p-12">
        <ShowMoreSection title="Popular Movies Of 2024" href="/advancedsearch/movie?releaseDate=2024-01-01_&sortBy=vote_count.desc" />
        <Suspense fallback={<DiscoverMainSkeleton />}>
          <Discover
            id={4}
            cat="movie"
            filter={{
              sort_by: "vote_count.desc",
              primary_release_year: 2024,
              page: 1,
            }}
          />
        </Suspense>
        <ShowMoreSection title="Popular Movies Of 2024" href="/advancedsearch/movie?sortBy=vote_average.desc&country=US&voteCount=18000-" />
        <Suspense fallback={<DiscoverMainSkeleton />}>
          <Discover
            id={5}
            cat="movie"
            filter={{
              sort_by: "vote_average.desc",
              "vote_count.gte": 18000,
              with_origin_country: "US",
              page: 1,
            }}
          />
        </Suspense>
        <ShowMoreSection title="Popular Movies Of 2024" href="/advancedsearch/movie?sortBy=vote_average.desc&country=US&genres=18&releaseDate=2010-01-01_2019-12-30&voteCount=13000-" />
        <Suspense fallback={<DiscoverMainSkeleton />}>
          <Discover
            id={6}
            cat="movie"
            filter={{
              "primary_release_date.gte": "2010-01-01",
              "primary_release_date.lte": "2019-12-30",
              sort_by: "vote_average.desc",
              with_genres: "18",
              "vote_count.gte": 13000,
              with_origin_country: "US",
              page: 1,
            }}
          />
        </Suspense>
        <CustomH1 title="Three Best Selling Movies Of 2024" />
        <Suspense fallback={<TopSellingSkeleton />}>
          <TopSellingSection />
        </Suspense>
      </div>
      <Suspense fallback={<RecommendationImageSkeleton />}>
        <Recommendations mainCategory="movie" />
      </Suspense>
      <div className="p-6 xl:p-12">
        <CustomH1 title="Trending Movie's This Week" />
        <Suspense fallback={<WeekTrendingSkeleton />}>
          <WeekTrending cat="movie" />
        </Suspense>
      </div>
    </main>
  )
}
export default Page
