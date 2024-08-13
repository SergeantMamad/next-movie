"use client";
import Image from "next/image";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { slideObj } from "./slides";
const objSize = Object.keys(slideObj).length;
const Slider = () => {
  const [slideN, setSlideN] = useState(1);
  useEffect(() => {
    const Timer = setInterval(() => {
      slideN == objSize
        ? setSlideN(1)
        : setSlideN((prevSlide) => prevSlide + 1);
    }, 8000);
    return () => {
      clearInterval(Timer);
    };
  }, [slideN]);

  return (
      <div className="relative">
        <div className="relative w-full h-[780px]">
          {Object.keys(slideObj).map((index) => (
            <div className={`slider ${slideN == index ? "active" : ""}`} key={index}>
              <Image
                src={slideObj[index].image}
                fill
                style={{
                  objectFit: "cover",
                }}
                alt=""
              />
              <div className="absolute left-12 bottom-20">
                <h1 className="font-bold text-white text-4xl">
                  {slideObj[index].title}
                </h1>
                <p className="text-white text-sm w-1/3 mt-4 text-justify">
                  {slideObj[index].desc}
                </p>
                <div className="flex gap-4">
                  <button className="bg-green-500 text-white mt-5 px-12 text-sm font-semibold py-3 rounded-lg">
                    More Info
                  </button>
                  <button className="border border-white text-white mt-5 px-6 text-sm font-semibold py-3 rounded-xl flex gap-2">
                    <BookmarkIcon className="w-5 h-5 font-bold" />
                    Add Watchlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 absolute right-12 bottom-24">
          {Object.keys(slideObj).map((index, key) => (
            <button
              key={key}
              onClick={() => setSlideN(parseInt(index))}
              className={`w-3 h-3 rounded-full ${
                slideN == index ? "bg-white" : "bg-[#55545b]"
              }`}
            />
          ))}
        </div>
      </div>
  );
};

export default Slider;
