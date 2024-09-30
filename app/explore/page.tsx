import React from "react";
import PagePadding from "@/components/PagePadding";
import Category from "./components/Category";
import {
  dymmyGenreList,
  getAllPlaylist,
  getSongListTop10,
} from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";
import GenreListCarousel from "@/components/GenreListCarousel";

const page = async () => {
  // const playListArray = await getAllPlaylist();
  // const SongListTop10 = await getSongListTop10();
  // 2개의 데이터 호출을 한번에 작업
  const [playListArray, SongListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);
  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
      <div className="mt-20"></div>
      <PlayListCarousel
        playlistArray={playListArray}
        title={"새 앨범 및 싱글"}
      ></PlayListCarousel>
      <div className="mt-20"></div>
      <SongListCarousel
        SongListTop10={SongListTop10}
        title={"인기곡"}
      ></SongListCarousel>
      <div className="mt-20"></div>
      <GenreListCarousel genreList={dymmyGenreList} title="분위기 및 장르" />

      <div className="mt-20"></div>
      <div className="mt-20"></div>
    </PagePadding>
  );
};

export default page;
