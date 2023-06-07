import { PokemonList } from './components/PokemonList';
import { getPokemons } from './lib/getPokemons';

export default async function HomePage() {
  const pokemos = await getPokemons();
  return <PokemonList pokemos={pokemos} />;
}
