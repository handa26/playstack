"use client";
import { Gamepad2, Play, LibraryBig, Gift } from "lucide-react";
import Link from "next/link";

import CustomImageGallery from "@/components/CustomImageGallery";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { formattedDate } from "@/lib/utils";

interface GameDetailsProps {
  gameDetails: {
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
  };
}

const GameDetails = ({ gameDetails }: GameDetailsProps) => {
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

          <CustomImageGallery items={images} />
        </div>

        {/* Right */}
        <div className="mt-2.5">
          <div className="flex flex-col gap-2 justify-center w-[70%] mx-auto mb-[20px]">
            <h1 className="text-5xl font-bold">{gameDetails.name}</h1>
            <p>
              Released on{" "}
              <span className="bg-slate-200 text-slate-800 p-[5px] rounded-sm">
                {formattedDate(gameDetails.released)}
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-4 justify-center items-center my-2.5 p-2 bg-[#1f2128] w-1/2 mx-auto rounded-lg">
            <div className="group cursor-pointer">
              <Gamepad2 size={30} className="cursor-pointer mx-auto" />
              <p className="text-slate-500 group-hover:text-slate-200">
                Played
              </p>
            </div>
            <div className="group cursor-pointer">
              <Play size={30} className="cursor-pointer mx-auto" />
              <p className="text-slate-500 group-hover:text-slate-200">
                Playing
              </p>
            </div>
            <div className="group cursor-pointer">
              <LibraryBig size={30} className="cursor-pointer mx-auto" />
              <p className="text-slate-500 group-hover:text-slate-200">
                Backlog
              </p>
            </div>
            <div className="group cursor-pointer">
              <Gift size={30} className="cursor-pointer mx-auto" />
              <p className="text-slate-500 group-hover:text-slate-200">
                Wishlist
              </p>
            </div>
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

          <div className="my-[20px] flex gap-[20px]">
            <div>
              <h4 className="text-[14px] text-slate-500">Platforms</h4>
              <div className="flex gap-2 mt-2.5">
                {gameDetails.platforms.map((x, index) => (
                  <>
                    <span
                      key={index}
                      className="text-slate-50 cursor-pointer hover:text-slate-500"
                    >
                      {x.platform.name}
                      {index < gameDetails.platforms.length - 1 && <span>, </span>}
                    </span>
                  </>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[14px] text-slate-500">Genres</h4>
              <div className="flex gap-2 mt-2.5">
                {gameDetails.genres.map((x, index) => (
                  <>
                    <span
                      key={index}
                      className="text-slate-50 cursor-pointer hover:text-slate-500"
                    >
                      {x.name}
                      {index < gameDetails.genres.length - 1 && <span>, </span>}
                    </span>
                  </>
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
