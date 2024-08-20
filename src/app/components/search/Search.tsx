"use client"
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { useMutation } from "@tanstack/react-query"
import debounce from "debounce"
import { useCallback, useEffect, useState } from "react"
import { search } from "@/action"
import ResultComponent from "./ResultComponent"
import { customcn } from "@/app/utils/functions/customcn"
import { useSetParam } from "@/app/utils/hooks/useSetParam"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import BouncingCircles from "../other/BouncingCircles"
import SearchModal from "../modals/SearchModal"
import { useDisclosure } from "@nextui-org/react"
import SearchInput from "./SearchInput"
import SearchBody from "./SearchBody"

export default function Search() {
  const [isClicked, setIsClicked] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const { mutate, data, isPending, reset } = useMutation({
    mutationKey: ["search"],
    mutationFn: search,
  })
  useSetParam(searchInput)
  const searchParam = useSearchParams().get("search")
  const handleInput = useCallback(
    (value: string) => {
      if (value == "") {
        reset()
      } else {
        mutate(value)
      }
    },
    [mutate, reset]
  )
  useEffect(() => {
    handleInput(searchInput)
  }, [searchInput, handleInput, reset])
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className="search-box relative">
      <FontAwesomeIcon
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
        icon={isClicked ? faXmark : faMagnifyingGlass}
        onClick={onOpen}
      />
      <SearchModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <SearchInput setSearchInput={setSearchInput} />
        <SearchBody
          data={data}
          isPending={isPending}
          searchInput={searchInput}
          searchParam={searchParam}
        />
      </SearchModal>
    </div>
  )
}
