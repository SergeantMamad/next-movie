"use client";
import { useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import debounce from "lodash.debounce";
import { UpTopMain } from "@/action";
import Link from "next/link";
import UpTopCard from "./UpTopCard";
import ScrollButtons from "../../cartGeneral/ScrollButtons";
const UpTop = ({ cat }:{cat:string}) => {
  const topSelling = useRef(null);
  const { data } = useSuspenseQuery({
    queryKey: [cat],
    queryFn: () => UpTopMain(cat),
  });
  return (
    <div className="relative">
      <ScrollButtons ref={topSelling} value={340} />
      <div
        className="grid grid-rows-4 gap-8 grid-flow-col w-[312px] mt-4 overflow-x-hidden scroll-smooth grid-test"
        ref={topSelling}
      >
        {data?.map((res, index) => (
          <UpTopCard id={res.id} mediaType={"Movie"} voteAverage={res.vote_average} posterPath={res.poster_path!} title={res.title!} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default UpTop;
