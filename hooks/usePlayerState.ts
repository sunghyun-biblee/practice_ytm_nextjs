import { dummyAllSongList } from "@/lib/dummyData";
import { Song } from "@/types";
import { create } from "zustand";

interface PlayerState {
  isVisiblePlayer: boolean;
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
  activeSong?: Song | null;
  prevPlayerQueue: Song[];
  nextPlayerQueue: Song[];
  //  기능
  addSongList: (songList: Song[]) => void;
  playNext: () => void;
  playBack: () => void;
}

const usePlayerState = create<PlayerState>((set) => ({
  isVisiblePlayer: true,
  setIsVisiblePlayer: (isVisiblePlayer: boolean) =>
    set({
      isVisiblePlayer,
    }),
  activeSong: null,
  prevPlayerQueue: [],
  nextPlayerQueue: [
    dummyAllSongList[1],
    dummyAllSongList[2],
    dummyAllSongList[3],
  ],
  //  기능
  addSongList: (songList: Song[]) => {
    set((prev) => {
      const prevSong = prev.activeSong;
      const cloneSongList = [...songList];
      const currentSong = cloneSongList.splice(0, 1)?.[0];

      return {
        activeSong: currentSong,
        prevPlayerQueue: prevSong
          ? [prevSong, ...prev.prevPlayerQueue]
          : prev.prevPlayerQueue,
        nextPlayerQueue: [...cloneSongList],
        isVisiblePlayer: true,
      };
    });
  },
  playNext: () => {
    set((prev) => {
      const currSong = prev.activeSong;
      const nextSrc = prev.nextPlayerQueue.splice(0, 1)?.[0];
      return {
        activeSong: nextSrc,
        nextPlayerQueue: prev.nextPlayerQueue,
        prevPlayerQueue: [
          ...prev.prevPlayerQueue,
          ...(currSong ? [currSong] : []),
        ],
      };
    });
  },
  playBack: () => {
    set((prev) => {
      const currSong = prev.activeSong;
      const prevSrc = prev.prevPlayerQueue.splice(0, 1)?.[0];

      return {
        activeSong: prevSrc,
        nextPlayerQueue: [
          ...prev.nextPlayerQueue,
          ...(currSong ? [currSong] : []),
        ],
        prevPlayerQueue: prev.prevPlayerQueue,
      };
    });
  },
}));

export default usePlayerState;
