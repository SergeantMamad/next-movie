"use client"
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { useMutation } from "@tanstack/react-query"
import debounce from "debounce"
import { useEffect, useState } from "react"
import { search } from "@/action"
import ResultComponent from "./ResultComponent"
import { customcn } from "@/app/utils/functions/customcn"
import { useSetParam } from "@/app/utils/hooks/useSetParam"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import BouncingCircles from "../other/BouncingCircles"

export default function Search() {
  const [isClicked, setIsClicked] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const mutation = useMutation({
    mutationKey: ["search"],
    mutationFn: search,
  })
  useSetParam(searchInput)
  const searchParam = useSearchParams().get("search")

  function handleInput(value: string) {
    if (value == "") {
      mutation.reset()
    } else {
      mutation.mutate(value)
    }
  }

  useEffect(() => {
    handleInput(searchInput)
  }, [searchInput])

  return (
    <div className="search-box relative">
      <FontAwesomeIcon
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
        icon={isClicked ? faXmark : faMagnifyingGlass}
        onClick={() => setIsClicked((prevState) => !prevState)}
      />
      <input
        onInput={debounce(
          (e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value),
          1500
        )}
        className={customcn(
          `w-[500px] h-[30px] p-6 rounded-md outline-none bg-[#08070A] text-lg border border-transparent focus:border-gray-800 invisible transition-all duration-1000 opacity-0`,
          isClicked && "transition-all duration-1000 opacity-100 visible"
        )}
      />
      {isClicked && (
        <div className="resault-active w-full max-h-[550px] overflow-y-auto bg-[#08070A] absolute top-14 rounded-[7px] p-2 border border-gray-800">
          {searchInput == "" ? (
            <p className="text-center w-full p-7 block">
              Type A Movie Or A TV Show
            </p>
          ) : mutation.data && mutation.data.length > 0 ? (
            <>
              {mutation.data.map((result) => (
                <ResultComponent
                  id={result.id}
                  mediaType={result.media_type!}
                  posterPath={result.poster_path!}
                  title={(result as any).name || result.title}
                  voteAverage={result.vote_average}
                  firstAirDate={
                    result.media_type == "tv"
                      ? (result as any).first_air_date
                      : undefined
                  }
                  releaseDate={
                    result.media_type == "movie"
                      ? result.release_date
                      : undefined
                  }
                  genres={result.genre_ids!}
                  isInSearch={true}
                />
              ))}
              <Link href={`searchall/?search=${searchParam}`} className="block text-center w-full p-5 hover:bg-[#0e0c11] rounded-md transition-colors border-gray-900">Search For More</Link>
            </>
          ) : mutation.data?.length == 0 ? (
            <p className="text-center w-full p-7 block">There is no result</p>
          ) : mutation.isPending ? (
            <BouncingCircles />
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  )
}
