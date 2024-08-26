"use client";
import React, { useRef } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const WeekTrendingSkeleton = () => {
  let contents = [];
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
      <div className="flex mt-10 gap-4 overflow-hidden scroll-smooth cardsSkeleton">
        {contents}
      </div>
    </div>
  );
};

export default WeekTrendingSkeleton;
