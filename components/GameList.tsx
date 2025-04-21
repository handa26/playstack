import GameCard from "./GameCard";

interface GameListProps {
  games: {
    id: number;
    name: string;
    background_image?: string;
  }[];
}

const GameList = ({ games }: GameListProps) => {
  return (
    <section className="mt-10 mb-10">
      <div className="game-list">
        {games.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </section>
  );
};

export default GameList;
