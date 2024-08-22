"use client";
import { useRef } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { UpTopMain } from "@/action";
import UpTopCard from "./UpTopCard";
import ScrollButtons from "../../cartGeneral/ScrollButtons";
import { useObserveElementWidth } from "@/app/utils/hooks/useObserveElementWidth";
import useSwipe from "@/app/utils/hooks/useSwipe";
import { scrollLeftRight } from "@/app/utils/functions/scrollLeftRight";
const UpTop = ({ cat }:{cat:string}) => {
  const { data } = useSuspenseQuery({
    queryKey: [cat],
    queryFn: () => UpTopMain(cat),
  });
  const { ref: divRef, width } = useObserveElementWidth<HTMLDivElement>()
  const { onTouchEnd, onTouchMove, onTouchStart } = useSwipe({
    onSwipedLeft: () => scrollLeftRight(divRef, "left", width + 32),
    onSwipedRight: () => scrollLeftRight(divRef, "right", width + 32),
  })


  return (
    <div className="relative">
      <ScrollButtons ref={divRef} value={width + 32} />
      <div
        className="grid grid-rows-4 gap-8 gap-y-10 grid-flow-col max-w-[312px] mt-4 overflow-x-hidden scroll-smooth"
        ref={divRef}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
      >
        {data?.map((res, index) => (
          <UpTopCard id={res.id} mediaType={"movie"} voteAverage={res.vote_average} posterPath={res.poster_path!} title={res.title!} genres={res.genre_ids!} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default UpTop;
