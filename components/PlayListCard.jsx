"use client";
import Image from "next/image";
import React from "react";
import { getRandomElementFromArray } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import IconButton from "./elements/IconButton";

const PlayListCard = ({ playlist = {} } = {}) => {
  const { push } = useRouter();
  const { id, owner = "", playlistName = "", songList = [] } = playlist ?? {};
  const songListLen = songList?.length;
  const imgSrc = getRandomElementFromArray(songList)?.imageSrc;

  const onClickCard = () => {
    if (id) {
      push(`/playlist?list=${id}`);
    }
  };

  const onClickPlay = () => {
    //  Todo Play
  };
  return (
    <article className="h-[240px] cursor-pointer group">
      <section className="relative h-[136px]" onClick={onClickCard}>
        <Image
          src={
            imgSrc ||
            "https://images.unsplash.com/photo-1662139295991-0c32cfebad20?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          fill={true}
          alt="thumbnail"
          className="object-cover"
        />
        <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.5)] top-0 w-full h-[136px]">
          <div className="absolute top-2 right-4">
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div className="absolute bottom-4 right-4 flex items-center justify-center transform-gpu transition-transform hover:scale-125 bg-[rgba(0,0,0,0.4)] w-[45px] h-[45px] rounded-full hover:bg-[rgba(0,0,0,0.8)] pl-1">
            <FiPlay size={24} />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songListLen}개`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
