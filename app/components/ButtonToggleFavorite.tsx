'use client';

import { useState } from 'react';

import confetti from 'canvas-confetti';

import { existInFavorite, toggleFavorite } from '@/app/lib/utils';

export const ButtonToggleFavorite = ({ pokemonId }: { pokemonId: string }) => {
  const [isFavorite, setIsFavorite] = useState(existInFavorite(pokemonId));

  const handleToggleFavorite = () => {
    toggleFavorite(pokemonId);
    setIsFavorite(!isFavorite);

    if (isFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className="rounded-xl border-2 border-indigo-500 bg-black px-6 py-2 hover:bg-slate-900"
    >
      {isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
    </button>
  );
};
