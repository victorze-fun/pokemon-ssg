import Image from 'next/image';
import Link from 'next/link';
import { SmallPokemon } from '../interfaces';

export const PokemonItem = ({ pokemon }: { pokemon: SmallPokemon }) => {
  return (
    <Link
      href={pokemon.url}
      className="h-50 w-80 flex-grow cursor-pointer rounded-lg bg-zinc-800 p-4 active:bg-zinc-900"
    >
      <Image className="h-40 w-full" src={pokemon.img} alt="avatar" width={140} height={140} />
      <div className="flex justify-between">
        <span className="capitalize">{pokemon.name}</span>
        <span>#{pokemon.id}</span>
      </div>
    </Link>
  );
};
