"use client"
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { useMutation } from "@tanstack/react-query"
import { useCallback, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import SearchModal from "../modals/SearchModal"
import { useDisclosure } from "@nextui-org/react"
import SearchInput from "./SearchInput"
import SearchBody from "./SearchBody"
import { updateQueryParams } from "@/app/utils/functions/updateQueryParams"
import { getSearch } from "@/app/utils/actions/searchActions"

export default function Search() {
  const [searchInput, setSearchInput] = useState("")
  const { mutate, data, isPending, reset } = useMutation({
    mutationKey: ["search"],
    mutationFn: getSearch,
  })
  const searchParam = useSearchParams().get("search")
  const handleInput = useCallback(
    (value: string) => {
      if (value == "") {
        reset()
      } else {
        mutate({
          pageParam:1,
          value:searchInput
        })
      }
    },
    [mutate, reset,searchInput]
  )
  useEffect(() => {
    updateQueryParams({ search: searchInput })
    handleInput(searchInput)
  }, [searchInput, handleInput, reset])
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className="search-box relative">
      <FontAwesomeIcon
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
        icon={faMagnifyingGlass}
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
