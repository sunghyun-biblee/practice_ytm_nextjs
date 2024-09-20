"use client";
import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

const PlaylistNav = ({ playlist }) => {
  const { id, owner, playlistName, songList } = playlist;

  const onClickPlay = () => {
    // todo play music
  };
  return (
    <li
      className="mx-3 px-4 h-[56px] flex flex-row justify-between items-center
    hover:bg-neutral-700 rounded-lg group"
    >
      <div>
        <div className="text-sm">{playlistName}</div>
        <div className="text-xs text-neutral-500">{owner}</div>
      </div>
      <div>
        <div
          className="hidden group-hover:block cursor-pointer"
          onClick={onClickPlay}
        >
          <IoMdPlayCircle size={30} />
        </div>
      </div>
    </li>
  );
};

export default PlaylistNav;
