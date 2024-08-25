"use client"
import Image from "next/image"
import { useContext } from "react"
import { StorageContext } from "../utils/context/storageContext"
import Link from "next/link"
import { Accordion, AccordionItem } from "@nextui-org/react"
import useMediaQuery from "../utils/hooks/useMediaQuery"
import WatchList from "../components/watchlist/WatchList"

const Page = () => {
  const context = useContext(StorageContext)
  const isLarge = useMediaQuery("(min-width: 1024px)")
  return (
    <main>
      <title>Watchlist | Next Movie</title>
      <div className="relative h-[450px] slider active">
        <Image
          unoptimized
          src="/images/fury.png"
          fill
          alt=""
          className="object-cover  brightness-50"
        />
      </div>
      <div className="min-h-[70vw] lg:min-h-[20vw] flex items-center justify-center flex-col gap-3">
        {context?.items?.length == 0 && (
          <>
            <p className="text-2xl lg:text-5xl font-semibold text-center">
              Whoops, it looks like you don't have any item in your watchlist
            </p>
            <p className="text-lg font-semibold">
              Try Our{" "}
              <Link className="text-green-500" href="/discover">
                Discover
              </Link>{" "}
              Or{" "}
              <Link className="text-green-500" href="/advancedsearch/movie">
                Advanced Search
              </Link>{" "}
              :)
            </p>
          </>
        )}
        {context?.items?.length! > 0 && <div className="w-full lg:w-[80%]">
          <Accordion
            itemClasses={{
              title: "font-semibold",
            }}
            selectionMode="multiple"
          >
            <AccordionItem key="1" title="Movies">
            <WatchList isLarge={isLarge} mediaType="movie" />
            </AccordionItem>
            <AccordionItem key="2" title="Series">
              <WatchList isLarge={isLarge} mediaType="tv" />
            </AccordionItem>
          </Accordion>
        </div>}
      </div>
    </main>
  )
}
export default Page
