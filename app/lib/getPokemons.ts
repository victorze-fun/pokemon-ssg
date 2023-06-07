import { PokemonListResponse } from '../interfaces';
import pokeApi from './pokeApi';

export async function getPokemons() {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=150');

  return data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
    url: `/pokemon/${index + 1}`,
  }));
}
