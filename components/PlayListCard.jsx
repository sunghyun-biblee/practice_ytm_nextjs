"use client";
import Image from "next/image";
import React from "react";
import { getRandomElementFromArray } from "@/lib/utils";
import { useRouter } from "next/navigation";

const PlayListCard = ({ playlist }) => {
  const { push } = useRouter();
  const { id, owner, playlistName, songList } = playlist;
  const songListLen = songList?.length;
  const imgSrc = getRandomElementFromArray(songList).imageSrc;

  const onClickCard = () => {
    push(`/playlist?list=${id}`);
  };
  return (
    <article className="h-[240px] cursor-pointer">
      <section className="relative h-[136px]" onClick={onClickCard}>
        <Image
          src={imgSrc}
          fill={true}
          alt="thumbnail"
          className="object-cover"
        />
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songListLen}개`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
