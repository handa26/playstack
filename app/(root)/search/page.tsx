import GameList from "@/components/GameList";
import CustomPagination from "@/components/CustomPagination";

import { fetchGames } from "@/lib/actions/game";

const Page = async ({ searchParams }: { searchParams: { query?: string, page?: string } }) => {
  const query = (await searchParams).query;
  const page = (await searchParams).page as string;

  const data = await fetchGames({
    search: query,
    page: page,
  });

  return (
    <>
      <GameList
        games={data.results}
        title={`${
          query !== "" ? `${data.count} results for ${query}` : "All Games"
        }`}
      />
      <CustomPagination />
    </>
  );
};

export default Page;
