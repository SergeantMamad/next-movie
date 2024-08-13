"use client";
import { useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ScrollButtons from "../cartGeneral/ScrollButtons";
import CastsSkeletonCart from "./CastsSkeletonCart";
let contents = [];
for (let index = 0; index <= 15; index++) {
  contents.push(
    <CastsSkeletonCart key={index}/>
  );
}

const CastsSkeleton = () => {
  const castSkeletonRef = useRef(null);
  
  return (
    <div className="relative">
      <ScrollButtons ref={castSkeletonRef} value={310} />
      <div
        className="flex mt-4 gap-10 overflow-hidden scroll-smooth"
        ref={castSkeletonRef}
      >
        {contents}
      </div>
    </div>
  );
};

export default CastsSkeleton;
