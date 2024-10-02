"use client";
import { TopSong } from "@/types";
import Image from "next/image";
import React from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import {
  FiMoreVertical,
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";
import usePlayerState from "@/hooks/usePlayerState";

interface SongCardProps {
  song: TopSong;
}
const SongCard: React.FC<SongCardProps> = ({ song }) => {
  const { addSongList } = usePlayerState();
  const onClickPlay = () => {
    addSongList([song]);
  };
  return (
    <article className="flex flex-row items-center gap-4 h-[48px] w-full relative group hover:bg-[rgba(255,255,255,0.1)]  ">
      <div className="w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="img" fill className="object-cover" />
        <section
          onClick={onClickPlay}
          className="absolute top-0 hidden group-hover:flex w-[48px] h-[48px]  items-center justify-center bg-[rgba(0,0,0,0.6)] cursor-pointer"
        >
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle color="#EFEFEF" size={10} />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp color="#3CA63F" size={10} />
          ) : (
            <AiOutlineCaretDown color="#FF0000" size={10} />
          )}
        </div>
        <div className="group-hover:text-zinc-400 transition">
          {song.rank + 1}
        </div>
      </div>
      <div>
        <div className="group-hover:text-zinc-400 transition">{song.name}</div>
      </div>
      <section className="hidden group-hover:flex absolute top-0 right-0 flex-row h-[48px] w-1/2 justify-end items-center ">
        <IconButton icon={<FiThumbsDown size={20} />}></IconButton>
        <IconButton icon={<FiThumbsUp size={20} />}></IconButton>
        <IconButton icon={<FiMoreVertical size={20} />}></IconButton>
      </section>
    </article>
  );
};

export default SongCard;
