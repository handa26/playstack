import GameDetails from "@/components/GameDetails";

import { getGameDetails } from "@/lib/actions/game";

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = (await params).slug;
  const gameDetails = await getGameDetails(slug);

  return (
    <>
      <GameDetails gameDetails={gameDetails} />
    </>
  );
};

export default Page;
