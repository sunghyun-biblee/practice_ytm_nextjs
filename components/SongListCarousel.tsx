import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { chunkArray } from "@/lib/utils";
import { TopSong } from "@/types";
import React from "react";
import SongCard from "./SongCard";

interface SongListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  SongListTop10: TopSong[];
}

const SongColumn = ({ songList = [] }: { songList: TopSong[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {songList.map((song, idx) => (
        <div key={song.name}>
          <SongCard song={song}></SongCard>
        </div>
      ))}
    </div>
  );
};

const SongListCarousel: React.FC<SongListCarouselProps> = ({
  title,
  subTitle,
  Thumbnail,
  SongListTop10,
}) => {
  const chunkedTop10SongList = chunkArray(SongListTop10, 4) as TopSong[][];
  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {Thumbnail}
            <div className="flex flex-col justify-center gap-1">
              <div className="text-neutral-500">
                {subTitle && <div>{subTitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>

          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>
        <CarouselContent className="mt-4">
          {chunkedTop10SongList?.map((SongList, index) => {
            return (
              <CarouselItem key={index} className="lg:basis-1/2">
                <SongColumn songList={SongList} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SongListCarousel;
