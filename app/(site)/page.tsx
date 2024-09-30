import { sleep } from "@/lib/utils";
import React from "react";
import Category from "./components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

const page = async () => {
  const dummyPlayListData = [...dummyPlaylistArray];
  const dummyPlayListData2 = [await getPlaylistById(1)];
  const dummyPlayListData3 = [await getPlaylistById(2)];
  const dummyPlayListData4 = [await getPlaylistById(3)];
  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12 flex flex-col gap-20">
          <PlayListCarousel
            playlistArray={[...dummyPlayListData]}
            Thumbnail={
              <div className="w-[56px] h-[56px]">
                <UserIcon size="lg" />
              </div>
            }
            title={"다시 듣기"}
            subTitle="DoDo"
          ></PlayListCarousel>
          <PlayListCarousel
            playlistArray={[...dummyPlayListData2]}
            title={"BIG Naughty - 정이라고 하자 (feat.10CM)"}
            subTitle="새로운 앨범"
          ></PlayListCarousel>
          <PlayListCarousel
            playlistArray={[...dummyPlayListData3]}
            title={"커뮤니티 제공"}
          ></PlayListCarousel>
          <PlayListCarousel
            playlistArray={[...dummyPlayListData4]}
            title={"커버 및 리믹스"}
          ></PlayListCarousel>
        </div>
      </div>
    </PagePadding>
  );
};

export default page;
