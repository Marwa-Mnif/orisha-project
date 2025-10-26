import React, { useState, useEffect } from "react";

interface FavoriteButtonProps {
  characterId: number;
}

export default function FavoriteButton({ characterId }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    ) as number[];
    setIsFavorite(favorites.includes(characterId));
  }, [characterId]);

  function toggleFavorite() {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    ) as number[];
    let newFavorites: number[];
    if (favorites.includes(characterId)) {
      newFavorites = favorites.filter((id) => id !== characterId);
      setIsFavorite(false);
    } else {
      newFavorites = [...favorites, characterId];
      setIsFavorite(true);
    }
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  }

  return (
    <button
      onClick={toggleFavorite}
      className="tw-text-red-500 tw-text-2xl tw-p-2 tw-transition-transform tw-duration-200 hover:tw-scale-110"
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}
