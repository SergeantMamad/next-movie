import { useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
let contents = [];
for (let index = 0; index <= 15; index++) {
  contents.push(
    <div className="min-w-[320px] flex flex-col gap-1" key={index}>
      <div className="w-[320px] h-[200px] relative">
        <Skeleton
          baseColor="#7c7c7c"
          highlightColor="#8c8c8c"
          width={320}
          height={200}
          className="rounded-md"
        />
      </div>
      <Skeleton
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
        width={320}
        height={20}
        className="rounded-sm"
      />
    </div>
  );
}

const VideosSkeleton = () => {
  const videoSkeleton = useRef(null);
  function scrollRight() {
    videoSkeleton.current.scrollLeft += 325;
  }
  function scrollLeft() {
    videoSkeleton.current.scrollLeft -= 325;
  }
  const [disableButton, setDisableButton] = useState("left");
  const handleScroll = () => {
    if (videoSkeleton.current) {
      const { scrollLeft, scrollWidth, clientWidth } = videoSkeleton.current;
      switch (scrollLeft + clientWidth) {
        case clientWidth:
          setDisableButton("left");
          break;
        case scrollWidth:
          setDisableButton("right");
          break;
        default:
          setDisableButton("none");
      }
    }
  };
  return (
    <div className="relative flex items-center mt-10">
      {disableButton != "right" && (
        <button
          className="w-10 h-10 bg-[#55545b] rounded-full absolute -right-5 z-10"
          onClick={() => scrollRight()}
        >
          <ChevronRightIcon className="w-7 h-7 mx-auto text-white" />
        </button>
      )}
      {disableButton != "left" && (
        <button
          className="w-10 h-10 bg-[#55545b] rounded-full absolute -left-5 z-10"
          onClick={() => scrollLeft()}
        >
          <ChevronLeftIcon className="w-7 h-7 mx-auto text-white" />
        </button>
      )}
      <div
        className="flex overflow-hidden scroll-smooth gap-3"
        ref={videoSkeleton}
        onScroll={handleScroll}
      >
        {contents}
      </div>
    </div>
  );
};

export default VideosSkeleton;
