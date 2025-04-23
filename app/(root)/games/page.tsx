import GameList from "@/components/GameList";
import CustomPagination from "@/components/CustomPagination";

import { fetchGames } from "@/lib/actions/game";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const params = (await searchParams).page as string;

  const data = await fetchGames({
    page: params,
  });

  return (
    <>
      <GameList games={data.results} title="" />
      <CustomPagination />
    </>
  );
};

export default Page;
