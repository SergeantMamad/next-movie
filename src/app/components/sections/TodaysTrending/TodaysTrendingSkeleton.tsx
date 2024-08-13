"use client";
import React, { useRef } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight";


const TodaysTrendingSkeleton = () => {
  let contents = [];
  const divRef = useRef<HTMLDivElement>(null)
  for (let index = 0; index <= 15; index++) {
    contents.push(
      <div className="min-w-[310px] relative" key={index}>
        <Skeleton
          width={310}
          height={465}
          borderRadius={12}
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
        />
      </div>
    );
  }
  return (
    <div className="relative">
      <button
        onClick={() => scrollLeftRight(divRef,"left",310)}
        className="w-10 h-10 bg-[#55545b] rounded-full absolute -right-4 top-52 z-10"
      >
        <ChevronRightIcon className="w-7 h-7 mx-auto text-white" />
      </button>
      <button
         onClick={() => scrollLeftRight(divRef,"right",310)}
        className="w-10 h-10 bg-[#55545b] rounded-full absolute -left-4 top-52 z-10"
      >
        <ChevronLeftIcon className="w-7 h-7 mx-auto text-white" />
      </button>
      <div className="flex mt-10 gap-4 overflow-hidden scroll-smooth cardsSkeleton" ref={divRef}>
        {contents}
      </div>
    </div>
  );
};

export default TodaysTrendingSkeleton;
