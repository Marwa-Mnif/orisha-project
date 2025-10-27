import { Star } from "lucide-react";
import React from "react";
import { Character } from "../types/character";
import PokemonItem from "../components/PokemItem";
import { useFavorites } from "../hooks/useFavourites";
import { BackButton } from "../components/BackButton";
import { Title } from "../components/Title";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-[80vh]">
        <Star className="tw-w-12 tw-h-12 tw-text-yellow-400 tw-mb-4" />
        <p className="tw-text-gray-600 tw-text-lg tw-font-medium">
          You have no favorites yet.
        </p>
        <BackButton label="Back" />
      </div>
    );
  }

  return (
    <>
      <div className=" tw-py-12 tw-max-w-5xl tw-mx-auto">
        <div className="tw-mx-center tw-mt-4">
          {" "}
          <BackButton label="Back" />
        </div>
        <Title title="Across All Universes — Your Picks" />

        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-place-items-center lg:tw-grid-cols-4 tw-gap-1">
          {favorites.map((character: Character) => (
            <PokemonItem character={character} />
          ))}
        </div>
      </div>
    </>
  );
}
