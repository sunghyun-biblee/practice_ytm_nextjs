"use client";
import React from "react";
import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import { FiMusic, FiShuffle } from "react-icons/fi";
import usePlayerState from "@/hooks/usePlayerState";

export const ChannelHead = ({ channel }) => {
  const { addSongList } = usePlayerState();
  const onClickShuffle = () => {
    addSongList(channel.songList);
  };
  return (
    <section>
      <div className="text-[28px] font-bold">{channel.name}</div>
      <article className="lg:hidden mt-4">
        <div>
          <DarkButton
            label={"구독중 4.18만"}
            className={"w-[230px] flex justify-center"}
          />
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <WhiteButton
            onClick={onClickShuffle}
            className="cursor-pointer"
            label={"셔플"}
            icon={<FiShuffle size={16} />}
          />
          <WhiteButton label={"뮤직 스테이션"} icon={<FiMusic size={16} />} />
        </div>
      </article>
      <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
        <WhiteButton
          onClick={onClickShuffle}
          className="cursor-pointer"
          label={"셔플"}
          icon={<FiShuffle size={16} />}
        />
        <WhiteButton label={"뮤직 스테이션"} icon={<FiMusic size={16} />} />
        <DarkButton
          label={"구독중 4.18만"}
          className={"w-[230px] flex justify-center"}
        />
      </div>
    </section>
  );
};
