import GameList from "@/components/GameList";

import { fetchGames } from "@/lib/actions/game";

const Page = async () => {
  const data = await fetchGames();

  return (
    <>
      <GameList games={data.results} title="" />
    </>
  );
};

export default Page;
