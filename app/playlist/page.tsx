import React from "react";
import { getPlaylistById } from "@/lib/dummyData";
import { permanentRedirect } from "next/navigation";
import { getRandomElementFromArray } from "@/lib/utils";
import HeadBgChanger from "@/components/HeadBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListHead from "@/components/PlayListHead";
import SongCardRowExpand from "@/components/SongCardRowExpand";

interface PlayListPageProps {
  searchParams: {
    list: string;
  };
}
const Page = async (props: PlayListPageProps) => {
  const playlist = await getPlaylistById(Number(props.searchParams.list));

  if (!playlist) {
    permanentRedirect("/");
  }
  const imgSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;
  return (
    <PagePadding>
      <HeadBgChanger imageSrc={imgSrc} />
      <div className="mt-12"></div>
      <PlayListHead playlist={playlist} />
      <div className="mt-12"></div>
      <section className="flex flex-col gap-3">
        {playlist.songList.map((song) => (
          <SongCardRowExpand
            song={song}
            key={song.name + song.channelId}
          ></SongCardRowExpand>
        ))}
      </section>
    </PagePadding>
  );
};

export default Page;
