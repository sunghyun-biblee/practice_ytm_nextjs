import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import HeadBgChanger from "@/components/HeadBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import { FiMusic, FiShuffle } from "react-icons/fi";

interface ChannelPageProps {
  params: { id: string };
}
const page = async ({ params }: ChannelPageProps) => {
  //   console.log(params);
  const channel = await getChannelById(Number(params.id));
  if (!channel) {
    permanentRedirect("/");
  }
  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;
  return (
    <PagePadding>
      <HeadBgChanger imageSrc={imageSrc} />
      <div className="mt-[150px]"></div>
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
            <WhiteButton label={"셔플"} icon={<FiShuffle size={16} />} />
            <WhiteButton label={"뮤직 스테이션"} icon={<FiMusic size={16} />} />
          </div>
        </article>
        <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
          <WhiteButton label={"셔플"} icon={<FiShuffle size={16} />} />
          <WhiteButton label={"뮤직 스테이션"} icon={<FiMusic size={16} />} />
          <DarkButton
            label={"구독중 4.18만"}
            className={"w-[230px] flex justify-center"}
          />
        </div>
      </section>

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
