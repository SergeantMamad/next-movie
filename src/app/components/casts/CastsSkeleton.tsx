"use client";
import { useRef } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import CastsSkeletonCart from "./CastsSkeletonCart";
let contents = [];
for (let index = 0; index <= 15; index++) {
  contents.push(
    <CastsSkeletonCart key={index}/>
  );
}

const CastsSkeleton = () => {
  
  
  return (
    <div className="relative">
      <div
        className="flex mt-4 gap-10 overflow-hidden scroll-smooth"
        
      >
        {contents}
      </div>
    </div>
  );
};

export default CastsSkeleton;
