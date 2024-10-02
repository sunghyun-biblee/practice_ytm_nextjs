import React from "react";

import HeadBgChanger from "@/components/HeadBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";

import { ChannelHead } from "../components/ChannelHead";

interface ChannelPageProps {
  params: { id: string };
}
const page = async ({ params }: ChannelPageProps) => {
  const channel = await getChannelById(Number(params.id));

  console.log(channel);
  if (!channel) {
    permanentRedirect("/");
  }

  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeadBgChanger imageSrc={imageSrc} />
      <div className="mt-[150px]"></div>
      <ChannelHead channel={channel} />

      <section className="mt-[80px]">
        <div className="font-bold text-[28px]">노래</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, index) => (
              <SongCardRowExpand
                key={song.name + index}
                song={song}
              ></SongCardRowExpand>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-[80px]">
        <div className="font-bold text-[28px]">앨범</div>
        <PlayListCarousel
          playlistArray={channel.playlistArray}
        ></PlayListCarousel>
      </section>
      <section className="mt-[80px]"></section>
    </PagePadding>
  );
};

export default page;
