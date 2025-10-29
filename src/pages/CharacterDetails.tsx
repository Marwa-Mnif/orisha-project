import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dna, MapPin, Globe } from "lucide-react";
import { useOneCharacter } from "../hooks/useOneCharacter";
import FullPageLoader from "./FullPageLoader";
import ErrorPage from "./ErrorPage";
import React from "react";
import { getIdFromUrl } from "../utils";
import BackButton from "../components/BackButton";
import { EpisodesList } from "../components/EpisodesList";
import FavoriteButton from "../components/FavoriteButton";
import Title from "../components/Title";
import CharacterMainProperties from "../components/CharacterMainProperties";

export default function CharacterDetails() {
  const { id } = useParams<{ id: string }>();
  const { character, loading, error } = useOneCharacter(Number(id));

  if (loading) return <FullPageLoader />;
  if (error || !character)
    return <ErrorPage message="Unable to load character details 😢" />;

  return (
    <div className="tw-container tw-mx-auto tw-px-4 tw-py-10 tw-max-w-4xl">
      <BackButton label="Back" />
      <Title title="Exploring the DNA of the Multiverse" />
      <motion.div
        className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden tw-flex tw-flex-col md:tw-flex-row"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="tw-relative tw-w-full md:tw-w-1/2 tw-bg-gray-100 tw-flex tw-items-start tw-justify-center">
          <img
            src={character.image}
            alt={character.name}
            className="tw-object-cover tw-w-full tw-h-full tw-max-h-[500px]"
          />
          <div className="tw-absolute tw-top-2 tw-right-2">
            <FavoriteButton characterId={character.id} character={character} />
          </div>
        </div>

        <div className="tw-p-8 tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-gap-4">
          <h1 className="tw-text-3xl tw-font-bold tw-text-gray-800 tw-mb-2">
            {character.name}
          </h1>

          <div className="tw-flex tw-flex-wrap tw-gap-2">
            <CharacterMainProperties character={character} />
          </div>
          <div className="tw-flex tw-items-center tw-gap-2">
            <Dna className="tw-h-5 tw-w-5 tw-text-green-600" />
            <p>
              <span className="tw-font-semibold">Type : </span>
              {character.type && character?.type != ""
                ? character.type
                : "Unknown"}
            </p>
          </div>

          <div className="tw-flex tw-items-center tw-gap-2">
            <Globe className="tw-h-5 tw-w-5 tw-text-indigo-600" />
            <p>
              <span className="tw-font-semibold">Origin : </span>
              {character.origin?.url &&
              character.origin?.name &&
              character.origin?.name != "" ? (
                <Link
                  to={`/location/${getIdFromUrl(character.origin.url)}`}
                  rel="noopener noreferrer"
                  className="tw-text-indigo-700 hover:tw-underline"
                >
                  {character.origin.name}
                </Link>
              ) : (
                character.origin?.name || "Unknown"
              )}
            </p>
          </div>
          <div className="tw-flex tw-items-center tw-gap-2">
            <MapPin className="tw-h-5 tw-w-5 tw-text-pink-600" />
            <p>
              <span className="tw-font-semibold">Localisation : </span>
              {character.location?.url &&
              character.location?.name &&
              character?.location?.name != "" ? (
                <Link
                  to={`/location/${getIdFromUrl(character.location.url)}`}
                  rel="noopener noreferrer"
                  className="tw-text-indigo-700 hover:tw-underline"
                >
                  {character.location.name}
                </Link>
              ) : (
                character.location?.name || "Unknown"
              )}
            </p>
          </div>
          <EpisodesList character={character} />
          <p className="tw-text-gray-500 tw-text-sm tw-mt-2">
            Created: {new Date(character.created).toLocaleDateString()}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
