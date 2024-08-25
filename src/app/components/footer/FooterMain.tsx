import React from "react";
import { Rubik } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
const rubik = Rubik({ subsets: ["latin"] });
const FooterMain = () => {
  return (
    <footer
      className={`p-6 xl:p-12 py-24 border-t border-gray-700 flex flex-col gap-12 justify-between ${rubik.className}`}
    >
      <div className="flex flex-col xl:flex-row justify-between">
        <h1 className={`flex text-2xl xl:text-4xl text-white w-full xl:w-1/4 leading-[45px]`}>
          NEXT MOVIE, YOUR HOME TO FIND ONLY THE BEST Movies and TV Shows.
        </h1>
        <div className="flex flex-col justify-between">
          <div className="flex justify-around text-white gap-4 text-lg mt-3 xl:mt-0">
            <Link href="/">Home</Link>
            <p>/</p>
            <Link href="/people">People</Link>
          </div>
          <div className="flex justify-between mt-3 xl:mt-0">
            <FontAwesomeIcon
              icon={faDiscord}
              className="text-[25px] w-[25px] h-[25px] bg-white p-1 rounded-sm text-[#0d0c0f]"
            />
            <FontAwesomeIcon
              icon={faTelegram}
              className="text-[25px] w-[25px] h-[25px] bg-white p-1 rounded-sm text-[#0d0c0f]"
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="text-[25px] w-[25px] h-[25px] bg-white p-1 rounded-sm text-[#0d0c0f]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between">
        <p className="text-xs text-gray-500 text-center">
          © 2024 All Rights Reserved To Sergeant & Irvan Wibowo
        </p>
        <div className="flex justify-around text-xs text-gray-500 gap-2 xl:gap-6 mt-3 xl:mt-0">
          <p>Sergeant Community</p>
          <p>Terms Of Service</p>
          <p>About Me</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
