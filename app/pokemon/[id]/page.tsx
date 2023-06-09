import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getPokemon } from '@/app/lib/getPokemon';
import { ButtonToggleFavorite } from '@/app/components/ButtonToggleFavorite';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const pokemon = await getPokemon(Number(params.id));

  return {
    title: pokemon.name,
  };
}

const PokemonPage = async ({ params }: { params: { id: string } }) => {
  const pokemon = await getPokemon(Number(params.id));

  if (!pokemon) return notFound();

  return (
    <div className="grid grid-cols-3 gap-4 pt-4">
      <div className="rounded-xl bg-zinc-800 p-4">
        <Image
          className="mx-auto"
          src={pokemon.sprite_default || '/no-image.png'}
          alt={pokemon.name}
          width={200}
          height={200}
        />
      </div>
      <div className="col-span-2 rounded-xl bg-zinc-800 p-4">
        <div className="flex justify-between">
          <h1 className="text-5xl capitalize">{pokemon.name}</h1>
          <ButtonToggleFavorite pokemonId={params.id}></ButtonToggleFavorite>
        </div>
        <h2 className="mt-6 text-2xl">Sprites:</h2>
        <div className="flex justify-around">
          <Image src={pokemon.sprites_front_default} alt={pokemon.name} width={100} height={100} />
          <Image src={pokemon.sprites_back_default} alt={pokemon.name} width={100} height={100} />
          <Image src={pokemon.sprites_front_shiny} alt={pokemon.name} width={100} height={100} />
          <Image src={pokemon.sprites_back_shiny} alt={pokemon.name} width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  // [ {id: 1}, {id: 2}, ...]
  return new Array(150).fill(null).map((_, i) => ({ id: String(i + 1) }));
}

export default PokemonPage;
