import { useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
let contents = [];
for (let index = 0; index <= 15; index++) {
  contents.push(
    <div className="w-[300px] h-[200px] min-w-[300px] relative" key={index}>
      <Skeleton
        baseColor="#7c7c7c"
        highlightColor="#8c8c8c"
        width={300}
        height={200}
        className="rounded-sm"
      />
    </div>
  );
}

const MainImagesSekelton = () => {
  const imageRef = useRef(null);
  function scrollRight() {
    imageRef.current.scrollLeft += 325;
  }
  function scrollLeft() {
    imageRef.current.scrollLeft -= 325;
  }
  const [disableButton, setDisableButton] = useState("left");
  const handleScroll = () => {
    if (imageRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = imageRef.current;
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
        ref={imageRef}
        onScroll={handleScroll}
      >
        {contents}
      </div>
    </div>
  );
};

export default MainImagesSekelton;
