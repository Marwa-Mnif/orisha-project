import { useParams, useNavigate } from "react-router-dom";
import { useOneCharacter } from "../hooks/useOneCharacter";
import FavoriteButton from "../components/FavoriteButton";
import React from "react";
import FullPageLoader from "./FullPageLoader";
import ErrorPage from "./ErrorPage";

export default function PokemonDetail() {
  const { id } = useParams<{ id: string }>();
  const characterId = id ? Number(id) : undefined;
  const { character, loading, error } = useOneCharacter(characterId);
  const navigate = useNavigate();

  if (loading) return <FullPageLoader />;
  if (error) return <ErrorPage message="Failed to load characters." />;
  if (!character)
    return <div className="tw-text-center tw-p-8">Character not found</div>;

  return (
    <div className="tw-max-w-4xl tw-mx-auto tw-p-4">
      <button
        className="tw-mb-4 tw-text-blue-600 hover:tw-underline"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-6">
        <img
          src={character.image}
          alt={character.name}
          className="tw-w-64 tw-h-64 tw-object-cover tw-rounded"
        />
        <div className="tw-flex-1 tw-flex tw-flex-col tw-gap-2">
          <h2 className="tw-text-2xl tw-font-bold">{character.name}</h2>
          <p>
            <strong>Status:</strong> {character.status}
          </p>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Gender:</strong> {character.gender}
          </p>
          <p>
            <strong>Created:</strong>{" "}
            {new Date(character.created).toLocaleDateString()}
          </p>
          <FavoriteButton characterId={character.id} />
        </div>
      </div>
    </div>
  );
}
