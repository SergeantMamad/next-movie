"use client";
import { MainWeekTrending } from "@/action";
import { useSuspenseQuery } from "@tanstack/react-query";
import TrendingCard from "./TrendingCard";
import { useRef } from "react";
import ScrollButtons from "../../cartGeneral/ScrollButtons";


const WeekTrending = ({cat}:{
  cat: "movie" | "tv" | "all"
}) => {
  const DivElement = useRef<HTMLDivElement>(null)
  const { data } = useSuspenseQuery({
    queryKey: ["WeekTrending" + cat],
    queryFn: () => MainWeekTrending(cat),
  });
  return (
    <div className="relative">
      <ScrollButtons ref={DivElement} value={310}/>
      <div className="flex mt-10 gap-4 overflow-hidden scroll-smooth cards" ref={DivElement}>
        {data?.map((res, index) =>
          res.vote_average == 0.0 ? null : (
            <TrendingCard id={res.id} mediaType={res.media_type!} posterPath={res.poster_path!} title={(res as any).title! || (res as any).name} voteAverage={res.vote_average} isInSergeantMain={false} key={index} />
          )
        )}
       
      </div>
    </div>
  );
  
};

export default WeekTrending;
