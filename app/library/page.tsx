import PagePadding from "@/components/PagePadding";
import React from "react";
import Category from "./components/Category";
import PlayListCard from "@/components/PlayListCard";

import { getRandomElementFromArray } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";

const page = () => {
  return (
    <PagePadding>
      <div className="mt-9"></div>
      <Category />
      <div className="mt-12"></div>
      <section className="grid gap-6 grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        ></PlayListCard>
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        ></PlayListCard>
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        ></PlayListCard>
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        ></PlayListCard>
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        ></PlayListCard>
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        ></PlayListCard>
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        ></PlayListCard>
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        ></PlayListCard>
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        ></PlayListCard>
        <PlayListCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        ></PlayListCard>
      </section>
      <div className="mt-12"></div>
    </PagePadding>
  );
};

export default page;
