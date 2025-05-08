"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomTabs = () => {
  const params = useSearchParams();
  const router = useRouter();

  const status = params.get("status") || "played";

  const [activeTab, setActiveTab] = useState(status);

  useEffect(() => {
    setActiveTab(status);
  }, [status]);

  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue);
    router.push(`/profile/games?status=${newValue}`, { scroll: false });
  };

  return (
    <>
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="max-w-xs w-full"
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
        <TabsContent value="played">Played Games</TabsContent>
        <TabsContent value="playing">Playing Games</TabsContent>
        <TabsContent value="backlog">Backlog Games</TabsContent>
        <TabsContent value="wishlist">Wishlist Games</TabsContent>
      </Tabs>
    </>
  );
};

export default CustomTabs;
