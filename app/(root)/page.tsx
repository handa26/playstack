import GameList from "@/components/GameList";

import { fetchGames } from "@/lib/actions/game";

const Home = async () => {
  const data = await fetchGames({
    dates: '2019-09-01,2019-09-30',
    platforms: '18,1,7',
  });

  return (
    <>
      <GameList games={data.results} />
    </>
  );
};

export default Home;
