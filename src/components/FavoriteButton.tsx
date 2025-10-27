import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { Character } from "../types/character";

interface FavoriteButtonProps {
  characterId: number;
  character: Character;
}

export default function FavoriteButton({
  characterId,
  character,
}: FavoriteButtonProps) {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <button
      onClick={() => toggleFavorite(character)}
      className="tw-text-red-500 tw-text-2xl tw-p-2 tw-transition-transform tw-duration-200 hover:tw-scale-110"
      aria-label={
        isFavorite(characterId) ? "Remove from favorites" : "Add to favorites"
      }
    >
      {isFavorite(characterId) ? "❤️" : "🤍"}
    </button>
  );
}
