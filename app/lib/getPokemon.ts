import { PokemonResponse } from '../interfaces';
import pokeApi from './pokeApi';

export async function getPokemon(id: number) {
  const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${id}`);
  return {
    name: data.name,
    sprite_default: data.sprites.other?.dream_world.front_default,
    sprites_front_default: data.sprites.front_default,
    sprites_back_default: data.sprites.back_default,
    sprites_front_shiny: data.sprites.front_shiny,
    sprites_back_shiny: data.sprites.back_shiny,
  };
}
