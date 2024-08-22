"use client"
import { DiscoverMain, getCategories } from "@/action"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"
import ScrollButtons from "../cartGeneral/ScrollButtons"
import { useEffect, useRef, useState } from "react"
import Categoris from "./Categoris"
import RecommendationsSlider from "./RecommendationsSlider"
import RecommendationNavigation from "./RecommendationNavigation"
import RecommendationImageSkeleton from "./RecommendationImageSkeleton"
import useSwipe from "@/app/utils/hooks/useSwipe"
import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight"
import { useObserveElementWidth } from "@/app/utils/hooks/useObserveElementWidth"

type mainCategory = {
  mainCategory: "movie" | "tv"
}

const Recommendations = ({ mainCategory }: mainCategory) => {
  const [currentCategory, setCurrentCategory] = useState(0)
  const { ref: divRef, width } = useObserveElementWidth<HTMLDivElement>()
  const [slide, setSlide] = useState(0)
  const getAllCategories = useSuspenseQuery({
    queryKey: [mainCategory],
    queryFn: () => getCategories(mainCategory),
  })
  const getMovieFromCategory = useQuery({
    queryKey: [mainCategory + currentCategory],
    queryFn: () =>
      DiscoverMain({
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

  function handleSlideLeft() {
    setSlide((prevSlide) =>
      prevSlide == 0
        ? getMovieFromCategory!.data!.slice(0, 6).length - 1
        : prevSlide - 1
    )
  }
  function handleSlideRight() {
    setSlide((prevSlide) =>
      prevSlide == getMovieFromCategory!.data!.slice(0, 6).length - 1
        ? 0
        : prevSlide + 1
    )
  }

  const imageSwap = useSwipe({
    onSwipedLeft: () => handleSlideRight(),
    onSwipedRight: () => handleSlideLeft(),
  })

  const categorySwap = useSwipe({
    onSwipedLeft: () => scrollLeftRight(divRef, "left", width + 16),
    onSwipedRight: () => scrollLeftRight(divRef, "right", width + 16),
  })

  return (
    <div className="h-[900px] w-screen relative mt-20">
      <div
        onTouchEnd={imageSwap.onTouchEnd}
        onTouchMove={imageSwap.onTouchMove}
        onTouchStart={imageSwap.onTouchStart}
      >
        {getMovieFromCategory.data ? (
          getMovieFromCategory.data
            .slice(0, 6)
            .map((movie, index) => (
              <RecommendationsSlider
                backdropPath={movie.backdrop_path!}
                slide={slide}
                index={index}
                title={(movie as any)?.title || (movie as any).name}
                voteAverage={movie.vote_average}
                key={index}
                genres={getAllCategories
                  .data!.filter((category) =>
                    movie.genre_ids?.includes(category.id)
                  )
                  .map((category) => category.name)}
                releaseDate={
                  (movie as any).release_date || (movie as any).first_air_date
                }
                mediaType={mainCategory}
                id={movie.id}
              />
            ))
        ) : (
          <RecommendationImageSkeleton />
        )}
      </div>
      <RecommendationNavigation
        getMovieFromCategory={getMovieFromCategory}
        slide={slide}
        setSlide={setSlide}
        handleLeft={handleSlideLeft}
        handleRight={handleSlideRight}
      />
      <div className="absolute right-0 left-0 bottom-40">
        <div className="relative max-w-[90%] mx-auto">
          <ScrollButtons ref={divRef} value={width + 16} />
          <div
            className="flex mt-10 gap-4 overflow-hidden scroll-smooth"
            ref={divRef}
            onTouchEnd={categorySwap.onTouchEnd}
            onTouchMove={categorySwap.onTouchMove}
            onTouchStart={categorySwap.onTouchStart}
          >
            {getAllCategories.data?.map((category, index) => (
              <Categoris
                name={category.name!}
                id={category.id}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Recommendations
