"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GameList from "./GameList";

import { getGamesFromStorage } from "@/lib/storage";

const CustomTabs = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [gamesStorage, setGamesStorage] = useState<GameStorage>([]);

  useEffect(() => {
    const localStorageGames = getGamesFromStorage();
    setGamesStorage(localStorageGames);
  }, []);

  const status = params.get("status") || "played";

  const [activeTab, setActiveTab] = useState(status);

  useEffect(() => {
    setActiveTab(status);
  }, [status]);

  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue);
    router.push(`/profile/games?status=${newValue}`, { scroll: false });
  };

  // const gamesStorage = getGamesFromStorage();

  return (
    <>
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="p-0 h-auto bg-background gap-1">
          <TabsTrigger
            className="data-[state=active]:bg-slate-600 data-[state=active]:text-primary-foreground text-slate-500 cursor-pointer"
            value="played"
          >
            Played
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-slate-600 data-[state=active]:text-primary-foreground text-slate-500 cursor-pointer"
            value="playing"
          >
            Playing
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-slate-600 data-[state=active]:text-primary-foreground text-slate-500 cursor-pointer"
            value="backlog"
          >
            Backlog
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-slate-600 data-[state=active]:text-primary-foreground text-slate-500 cursor-pointer"
            value="wishlist"
          >
            Wishlist
          </TabsTrigger>
        </TabsList>
        <TabsContent value="played">
          <GameList games={gamesStorage?.played} />
        </TabsContent>
        <TabsContent value="playing">
          <GameList games={gamesStorage?.playing} />
        </TabsContent>
        <TabsContent value="backlog" className="">
          <GameList games={gamesStorage?.backlog} />
        </TabsContent>
        <TabsContent value="wishlist">
          <GameList games={gamesStorage?.wishlist} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default CustomTabs;
