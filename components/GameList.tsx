import GameCard from "./GameCard";

interface GameListProps {
  games: {
    id: number;
    name: string;
    background_image?: string;
  }[];
  title: string;
}

const GameList = ({ games, title }: GameListProps) => {
  return (
    <section className="mt-10 mb-10">
      <h2 className="text-2xl mb-4 font-poppins font-semibold">{title}</h2>
      <div className="game-list">
        {games.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </section>
  );
};

export default GameList;
