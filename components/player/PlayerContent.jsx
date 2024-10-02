"use client";

import { Slider as PlayerSlider } from "@/components/ui/playerSlider";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { AiFillCaretUp, AiOutlinePause } from "react-icons/ai";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoShuffle,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { RiPlayFill } from "react-icons/ri";
import { RxLoop } from "react-icons/rx";
import { ClipLoader } from "react-spinners";
import { useAudio } from "react-use";
import usePlayerState from "../../hooks/usePlayerState";

const PlayerContent = () => {
  const { activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext } =
    usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    // src: "/music/50meru - Canopus.mp4",
    src: activeSong?.src,
    autoPlay: false,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  const onClickStartBtn = () => {
    if (activeSong) {
      controls.play();
    } else {
      playNext();
    }
  };
  const onClickPauseBtn = () => {
    controls.pause();
  };
  const onClickPrevBtn = () => {
    if (state.playing && state.tiem > 10) {
      controls.seek(0);
      return;
    }
    if (prevPlayerQueue.length === 0) return;
    playBack();
  };
  const onClickNextBtn = useCallback(() => {
    if (nextPlayerQueue.length === 0) {
      controls.pause();
    } else {
      playNext();
    }
  }, [controls, playNext, nextPlayerQueue]);

  useEffect(() => {
    const refAudio = ref?.current;
    refAudio.addEventListener("ended", onClickNextBtn);

    return () => {
      refAudio.removeEventListener("ended", onClickNextBtn);
    };
  }, [ref, onClickNextBtn]);
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(vlaue) => {
            controls.seek(vlaue);
            if (!state.playing) {
              controls.play();
            }
          }}
        />
      </div>
      <div>{audio}</div>
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
        <div className=" h-full flex flex-row items-center">
          <IoPlaySkipBackSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickPrevBtn}
          />
          {isLoading ? (
            <ClipLoader color="#FFF" />
          ) : state.playing ? (
            <AiOutlinePause
              size={40}
              className="cursor-pointer"
              onClick={onClickPauseBtn}
            />
          ) : (
            <RiPlayFill
              size={40}
              className="cursor-pointer"
              onClick={onClickStartBtn}
            />
          )}

          <IoPlaySkipForwardSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickNextBtn}
          />
        </div>
        <article>
          <div className="flex flex-row gap-4 items-center">
            <div className="relative w-[40px] h-[40px] ">
              <Image
                fill
                className="object-cover"
                src={activeSong?.imageSrc}
                alt="img"
              ></Image>
            </div>
            <div className="flex flex-col">
              <div>{activeSong?.name}</div>
              <div className="text-neutral-500 text-[14px]">
                {activeSong?.channel} · 조회수 7.8만회 · 좋아요 1.7천개
              </div>
            </div>
          </div>
        </article>
        <div className="flex flex-row gap-2">
          <div className=" flex-row gap-2 hidden lg:flex">
            <IoVolumeHighOutline size={24} className="cursor-pointer" />
            <IoShuffle size={24} className="cursor-pointer" />
            <RxLoop size={24} className="cursor-pointer" />
          </div>
          <div>
            <AiFillCaretUp size={24} className="cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerContent;
