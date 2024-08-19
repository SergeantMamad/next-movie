"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { useSuspenseQuery } from "@tanstack/react-query";
import { TopImdb } from "@/action";
import debounce from "lodash.debounce";
import Link from "next/link"
import ScrollButtons from "../../cartGeneral/ScrollButtons";
import { dateConvertor } from "@/app/utils/functions/dateConvertor";
import TopImdbMainCart from "./TopImdbMainCart";

const TopImdbMain = () => {
  const divRef = useRef(null);
  
  const { data } = useSuspenseQuery({
    queryKey: ["TopImdb"],
    queryFn: TopImdb,
  });
  return (
    <div className="relative">
      <div
        className="flex w-[645px] h-[700px] mt-4 overflow-x-hidden scroll-smooth"
        ref={divRef}
      >
        <ScrollButtons ref={divRef} value={680} />
        {data?.map((res, index) => (
          <TopImdbMainCart backdropPath={res.backdrop_path!} overview={res.overview!} releaseDate={res.release_date!} title={res.title!} voteAverage={res.vote_average} genres={res.genre_ids!} id={res.id} />
        ))}
      </div>
    </div>
  );
};

export default TopImdbMain;
