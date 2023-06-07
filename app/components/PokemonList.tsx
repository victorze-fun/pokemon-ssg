import { SmallPokemon } from '../interfaces';
import { PokemonItem } from './PokemonItem';

export const PokemonList = ({ pokemos }: { pokemos: SmallPokemon[] }) => {
  return (
    <div className="my-6 flex flex-wrap items-stretch gap-6">
      {pokemos.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
