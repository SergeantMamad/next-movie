import React from "react";
import localFont from "next/font/local";
import { Rubik } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
const rubik = Rubik({ subsets: ["latin"] });
const FooterMain = () => {
  return (
    <footer
      className={`p-12 py-24 border-t border-gray-700 flex flex-col gap-12 justify-between ${rubik.className}`}
    >
      <div className="flex justify-between">
        <h1 className={`flex text-4xl text-white w-1/4 leading-[45px]`}>
          NEXT MOVIE, YOUR HOME TO FIND ONLY THE BEST Movies and TV Shows.
        </h1>
        <div className="flex flex-col justify-between">
          <div className="flex justify-around text-white gap-4 text-lg">
            <p>Home</p>
            <p>/</p>
            <p>About</p>
            <p>/</p>
            <p>Actors</p>
          </div>
          <div className="flex justify-between">
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
      <div className="flex justify-between">
        <p className="text-xs text-gray-500">
          © 2024 All Rights Reserved To Sergeant & Irvan Wibowo
        </p>
        <div className="flex justify-around text-xs text-gray-500 gap-6">
          <p>Sergeant Community</p>
          <p>Terms Of Service</p>
          <p>About Me</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
