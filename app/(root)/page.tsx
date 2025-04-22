import GameList from "@/components/GameList";

import { fetchGames } from "@/lib/actions/game";
import { formatDate } from "@/lib/utils";

const Home = async () => {
  const currentDate = new Date();
  const lastWeekDate = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000));

  const data = await fetchGames({
    dates: `${formatDate(lastWeekDate)},${formatDate(currentDate)}`,
    ordering: "-added",
  });

  return (
    <>
      <GameList games={data.results} title="Trending Games This Week" />
    </>
  );
};

export default Home;
