import { Character } from "./character";

export type FavoritesContextType = {
  favorites: Character[];
  toggleFavorite: (character: Character) => void;
  isFavorite: (id: number) => boolean;
};