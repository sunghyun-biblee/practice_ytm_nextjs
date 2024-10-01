"use client";
import { Song } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  FiMoreVertical,
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";

interface SongCardRowExpandProps {
  song: Song;
}
const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
  const { channel, channelId } = song;
  const { push } = useRouter();
  const onClickChannel = () => {
    push(`/channel/${channelId}`);
  };
  return (
    <article className="flex flex-row items-center gap-4 h-[48px] w-full relative group hover:bg-[rgba(255,255,255,0.1)]  ">
      <div className="w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="img" fill className="object-cover" />
        <section className="absolute top-0 hidden group-hover:flex w-[48px] h-[48px]  items-center justify-center bg-[rgba(0,0,0,0.6)] cursor-pointer">
          <FiPlayCircle size={20} />
        </section>
      </div>

      <div className="flex flex-row gap-4 justify-between basis-1/3 group-hover:text-zinc-400 transition">
        <div className="w-[130px] truncate">{song.name}</div>
        <div
          className="text-neutral-500 hover:underline cursor-pointer"
          onClick={onClickChannel}
        >
          {channel}
        </div>
      </div>
      <section className="hidden group-hover:flex absolute top-0 right-0 flex-row h-[48px] w-1/2 justify-end items-center ">
        <IconButton icon={<FiThumbsDown size={20} />}></IconButton>
        <IconButton icon={<FiThumbsUp size={20} />}></IconButton>
        <IconButton icon={<FiMoreVertical size={20} />}></IconButton>
      </section>
    </article>
  );
};

export default SongCardRowExpand;
