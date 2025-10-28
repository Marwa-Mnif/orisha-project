import React from "react";
import { Character } from "../types/character";
import { useFavorites } from "../hooks/useFavourites";

interface FavoriteButtonProps {
  characterId: number;
  character: Character;
}

function FavoriteButton({ characterId, character }: FavoriteButtonProps) {
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
export default React.memo(FavoriteButton);
