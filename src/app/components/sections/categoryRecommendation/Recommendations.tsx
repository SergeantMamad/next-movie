"use client"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"
import { useEffect, useRef, useState } from "react"
import Categoris from "./Categoris"
import RecommendationsSlider from "./RecommendationsSlider"
import RecommendationNavigation from "./RecommendationNavigation"
import RecommendationImageSkeleton from "./RecommendationImageSkeleton"
import { getCategories } from "@/app/utils/actions/getSingleData"
import { getDiscover } from "@/app/utils/actions/sectionsAuction"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { A11y, Navigation, Pagination } from "swiper/modules"
import ScrollButtons from "../../cartGeneral/ScrollButtons"

type mainCategory = {
  mainCategory: "movie" | "tv"
}

const Recommendations = ({ mainCategory }: mainCategory) => {
  const [currentCategory, setCurrentCategory] = useState(0)
  const getAllCategories = useSuspenseQuery({
    queryKey: [mainCategory],
    queryFn: () => getCategories(mainCategory),
  })
  const getMovieFromCategory = useQuery({
    queryKey: [mainCategory + currentCategory],
    queryFn: () =>
      getDiscover({
        cat: mainCategory,
        id: 0,
        filter: {
          with_genres: currentCategory.toString(),
          "primary_release_date.gte": "2010-01-01",
          "primary_release_date.lte": "2024-12-30",
          "first_air_date.gte": "2000-01-01",
          "first_air_date.lte": "2024-12-30",
          sort_by: "vote_count.desc",
        },
      }),
  })

  useEffect(() => {
    setCurrentCategory(getAllCategories?.data![0].id)
  }, [getAllCategories?.data])

  return (
    <div className="h-[900px] max-w-[100vw] relative mt-20">
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={"auto"}
        centeredSlides={true}
        pagination={{
          clickable: true,
          el: ".recommended-bullets",
        }}
        observer={true}
        observeParents={true}
        parallax={true}
        navigation={{
          nextEl: ".recommended-button-next",
          prevEl: ".recommended-button-prev",
        }}
      >
        {getMovieFromCategory.data ? (
          getMovieFromCategory.data.slice(0, 6).map((movie, index) => (
            <SwiperSlide key={index}>
              <RecommendationsSlider
                backdropPath={movie.backdrop_path!}
                index={index}
                title={(movie as any)?.title || (movie as any).name}
                voteAverage={movie.vote_average}
                key={index}
                posterPath={movie.poster_path!}
                genreIds={movie.genre_ids!}
                releaseDate={
                  (movie as any).release_date || (movie as any).first_air_date
                }
                mediaType={mainCategory}
                id={movie.id}
              />
            </SwiperSlide>
          ))
        ) : (
          <RecommendationImageSkeleton />
        )}
      </Swiper>
      <RecommendationNavigation />
      <div className="absolute right-0 left-0 bottom-40">
        <div className="relative max-w-[90%] mx-auto">
          <ScrollButtons
            nextElClass="category-button-next"
            prevElClass="category-button-prev"
          />
          <Swiper
            modules={[Navigation, A11y]}
            autoplay
            slidesPerView={"auto"}
            spaceBetween={16}
            navigation={{
              nextEl: ".category-button-next",
              prevEl: ".category-button-prev",
            }}
          >
            {getAllCategories.data?.map((category, index) => (
              <SwiperSlide key={index}>
                <Categoris
                  name={category.name!}
                  id={category.id}
                  currentCategory={currentCategory}
                  setCurrentCategory={setCurrentCategory}
                  key={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
export default Recommendations
