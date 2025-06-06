"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

import CustomImageGallery from "@/components/CustomImageGallery";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { formattedDate, cn } from "@/lib/utils";
import { addGameToCategory, getGamesFromStorage } from "@/lib/storage";
import { gamesCategory } from "@/constants";
import { toast } from "sonner";

interface GameDetailsProps {
  gameDetails: {
    id: number;
    name: string;
    background_image: string;
    background_image_additional: string;
    released: string;
    description_raw: string;
    platforms: {
      platform: {
        name: string;
      };
    }[];
    genres: {
      name: string;
    }[];
    slug?: string;
  };
}

const GameDetails = ({ gameDetails }: GameDetailsProps) => {
  const [gamesStorage, setGamesStorage] = useState<GameStorage>([]);

  useEffect(() => {
    const localStorageGames = getGamesFromStorage();
    setGamesStorage(localStorageGames);
  }, []);

  const images = [
    {
      original: gameDetails.background_image,
      thumbnail: gameDetails.background_image,
    },
    {
      original: gameDetails.background_image_additional,
      thumbnail: gameDetails.background_image_additional,
    },
  ];

  const handleAddToCategory = (category: keyof GameStorage) => {
    const gameObj = {
      id: gameDetails.id.toString(),
      name: gameDetails.name,
      background_image: gameDetails.background_image,
      slug: gameDetails.slug,
    };

    addGameToCategory(gameObj, category);

    if (gamesStorage[category].some((game) => game.id === gameObj.id)) {
      toast.success(`Removed ${gameDetails.name} from ${category}`);
    } else {
      toast.success(`Added ${gameDetails.name} to ${category}`);
    }

    const currentData = getGamesFromStorage();
    setGamesStorage(currentData);
  };

  return (
    <>
      <div className="">
        {/* Left */}
        <div className="">
          <Breadcrumb className="mb-2.5">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  asChild
                  className="text-slate-500 hover:text-slate-200"
                >
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  asChild
                  className="text-slate-500 hover:text-slate-200"
                >
                  <Link href="/games">Games</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-slate-200">
                  {gameDetails.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div>
            <CustomImageGallery items={images} />
          </div>
        </div>

        {/* Right */}
        <div className="mt-2.5">
          <div className="flex flex-col gap-2 justify-center w-[70%] mx-auto mb-[20px]">
            <h1 className="text-[18px] font-bold md:text-5xl">
              {gameDetails.name}
            </h1>
            <p>
              Released on{" "}
              <span className="bg-slate-200 text-slate-800 p-[5px] rounded-sm">
                {formattedDate(gameDetails.released)}
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-4 justify-center items-center my-2.5 p-2 bg-[#1f2128] w-[100%] mx-auto rounded-lg md:w-1/2">
            {gamesCategory.map(({ title, icon: Icon }) => (
              <div
                className="group cursor-pointer"
                key={title}
                onClick={() => handleAddToCategory(title as keyof GameStorage)}
              >
                <Icon size={30} className="cursor-pointer mx-auto" />
                <p
                  className={cn(
                    "text-slate-500 capitalize group-hover:text-slate-200",
                    gamesStorage[title as keyof GameStorage]?.some(
                      (game) => String(game.id) === String(gameDetails.id)
                    ) && "text-slate-200"
                  )}
                >
                  {title}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold">About</h2>

            <div className="space-y-3 my-[20px]">
              {gameDetails.description_raw.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>

          <div className="my-[20px] flex flex-col gap-[20px] md:flex-row">
            <div>
              <h4 className="text-[14px] text-slate-500">Platforms</h4>
              <div className="flex flex-wrap gap-2 mt-2.5">
                {gameDetails.platforms.map((x, index) => (
                  <span
                    key={index}
                    className="text-slate-50 cursor-pointer hover:text-slate-500"
                  >
                    {x.platform.name}
                    {index < gameDetails.platforms.length - 1 && (
                      <span>, </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[14px] text-slate-500">Genres</h4>
              <div className="flex flex-wrap gap-2 mt-2.5">
                {gameDetails.genres.map((x, index) => (
                  <span
                    key={index}
                    className="text-slate-50 cursor-pointer hover:text-slate-500"
                  >
                    {x.name}
                    {index < gameDetails.genres.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetails;
