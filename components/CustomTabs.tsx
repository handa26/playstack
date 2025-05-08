"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomTabs = () => {
  return (
    <>
      <Tabs defaultValue="played" className="max-w-xs w-full">
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
