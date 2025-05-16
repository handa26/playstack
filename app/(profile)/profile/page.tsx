"use client";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";

import { getGamesFromStorage } from "@/lib/storage";
import { threeDigitsNum } from "@/lib/utils";

const Page = () => {
  const [gamesStorage, setGamesStorage] = useState<GameStorage>([]);

  useEffect(() => {
    const localStorageGames = getGamesFromStorage();
    setGamesStorage(localStorageGames);
  }, []);

  const { backlog, playing, wishlist, played } = gamesStorage;

  const totalGames = backlog?.length + playing?.length + wishlist?.length + played?.length;

  return (
    <div className="my-2">
      <div className="flex flex-col justify-center gap-[15px] md:gap-20 md:flex-row">
        <div className="text-center">
          <h2 className="text-8xl">{threeDigitsNum(totalGames) || 0}</h2>
          <p className="text-[16px]">Total Games</p>
        </div>
        <div className="text-center">
          <h2 className="text-8xl">{threeDigitsNum(played?.length) || 0}</h2>
          <p className="text-[16px]">Total Games Played</p>
        </div>
        <div className="text-center">
          <h2 className="text-8xl">{threeDigitsNum(backlog?.length) || 0}</h2>
          <p className="text-[16px]">Backlog Games</p>
        </div>
      </div>

      <Separator className="my-10" />
    </div>
  );
};

export default Page;
