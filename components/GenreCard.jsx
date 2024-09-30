import React from "react";
import { genrateRandomHex } from "../lib/utils";

const GenreCard = ({ genre }) => {
  const hex = genrateRandomHex();
  return (
    <div className="flex flex-row h-[48px] w-full cursor-pointer bg-neutral-800 rounded-lg">
      <div
        className="h-full w-2 rounded-l-lg"
        style={{ backgroundColor: hex }}
      ></div>
      <div className="flex justify-center items-center px-4">{genre}</div>
    </div>
  );
};

export default GenreCard;
