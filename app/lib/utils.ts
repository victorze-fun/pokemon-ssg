export const toggleFavorite = (id: string) => {
  let favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const existInFavorite = (id: string) => {
  let favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites.includes(id);
};

export const getPokemosIds = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};
