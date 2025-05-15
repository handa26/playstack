import Link from "next/link";
import Image from "next/image";

interface GameCardProps {
  id: number;
  slug?: string;
  name: string;
  background_image?: string;
}

const GameCard = ({ name, background_image, slug }: GameCardProps) => {
  return (
    <Link href={`/games/${slug}`} className="w-[100%] h-[250px] relative group md:w-[170px] md:h-[230px]">
      <Image
        src={background_image || "/images/eldenring-cover.jpg"}
        alt={`${name} cover`}
        width={0}
        height={0}
        className="rounded-lg shadow-lg transition-transform duration-200 group-hover:brightness-50 w-[100%] h-[250px] object-cover md:w-[170px] md:h-[230px]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <p className="absolute font-poppins font-semibold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        {name || "Elden Ring"}
      </p>
    </Link>
  );
};

export default GameCard;
