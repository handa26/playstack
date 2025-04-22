import GameList from "@/components/GameList";

import { fetchGames } from "@/lib/actions/game";

const Home = async () => {
  const data = await fetchGames({
    dates: "2025-01-01,2025-04-21",
    ordering: "-rating",
  });

  return (
    <>
      <GameList games={data.results} title="Top Rated Games" />
    </>
  );
};

export default Home;
