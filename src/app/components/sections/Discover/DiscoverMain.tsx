"use client"
import { useRef, useState } from "react"
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"
import { useSuspenseQuery } from "@tanstack/react-query"
import Image from "next/image"
import { categoris, DiscoverMain } from "@/action"
import Link from "next/link"
import ScrollButtons from "../../cartGeneral/ScrollButtons"
import DiscoverMainCard from "./DiscoverMainCard"
const Discover = ({ cat, id }: { cat: categoris; id?: number }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const { data } = useSuspenseQuery({
    queryKey: [cat + (id ? id : 0)],
    queryFn: () =>
      DiscoverMain({
        cat,
        id: id ? id : 0,
      }),
  })
  if (data?.length == 0) {
    return (
      <div className="flex h-[220px] items-center justify-center">
        <p className="text-white text-3xl font-semibold">
          We currently dont have anything for you :({" "}
        </p>
      </div>
    )
  }
  return (
    <div className="relative">
      <ScrollButtons ref={divRef} value={315} />
      <div
        className="flex mt-4 gap-4 overflow-hidden scroll-smooth"
        ref={divRef}
      >
        {data?.map((res, index) => (
          <DiscoverMainCard id={res.id} cat={cat} title={(res as any).title || (res as any).name} backdropPath={res.backdrop_path!} voteAverage={res.vote_average} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Discover
