'use client';

import { useEffect, useState } from 'react';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { getPokemosIds } from '../lib/utils';

export const metadata: Metadata = {
  title: 'Pokemons favoritos',
};

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(getPokemosIds());
  }, []);

  return (
    <>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <div className="mt-6 flex gap-6">
          {favoritePokemons.map((id) => (
            <Link
              href={`pokemon/${id}`}
              key={id}
              className="flex items-center justify-center rounded-xl bg-zinc-800 p-4"
            >
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                width={140}
                height={140}
                alt="image"
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

const NoFavorites = () => {
  return (
    <div className="flex h-[calc(100vh-70px)] items-center justify-center text-4xl">
      <div>
        <p className="mb-8">No hay favoritos</p>
        <Image
          className="opacity-20"
          src={
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
          }
          alt="image"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default FavoritesPage;
