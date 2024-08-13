import { useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ScrollButtons from "../cartGeneral/ScrollButtons";
import EpisodesSkeletonCart from "./EpisodesSkeletonCart";
let contents = [];
for (let index = 0; index <= 15; index++) {
  contents.push(
    <EpisodesSkeletonCart key={index}/>
  );
}

const EpisodesSkeleton = () => {
  const EpisodeRef = useRef(null);
  return (
    <div className="relative flex items-center mt-10">
      <ScrollButtons ref={EpisodeRef} value={310}/>
      <div
        className="flex mt-10 overflow-hidden scroll-smooth gap-3"
        ref={EpisodeRef}
      >
        {contents}
      </div>
    </div>
  );
};

export default EpisodesSkeleton;
