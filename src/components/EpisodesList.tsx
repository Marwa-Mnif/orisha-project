import { Loader2, Tv } from "lucide-react";
import React, { useState } from "react";
import { useEpisodes } from "../hooks/useEpisodes";
import { Character } from "../types/character";
export type EpisodesListProps = {
  character: Character;
};

export function EpisodesList({ character }: EpisodesListProps) {
  const { episodes, loadingEpisodes, errorEpisodes } =
    useEpisodes(character?.episode || []) || [];
  const [showedEpisodes, setShowedEpisodes] = useState<number>(0);
  return (
    <>
      {loadingEpisodes ? (
        <div className="tw-flex tw-justify-center tw-items-center tw-gap-2">
          <Loader2 className="tw-w-5 tw-h-5 tw-animate-spin tw-text-blue-600" />
          <span className="tw-text-gray-700">Loading episodes...</span>
        </div>
      ) : errorEpisodes ? (
        <p className="tw-text-red-600 tw-font-medium tw-mt-2">
          Failed to load episodes 😢
        </p>
      ) : (
        <div className="tw-bg-gray-50 tw-rounded-xl tw-p-4 tw-shadow-inner tw-space-y-2 tw-mt-4">
          <h3 className="tw-flex tw-items-center tw-gap-2 tw-text-blue-600 tw-font-semibold tw-text-lg">
            <Tv className="tw-w-5 tw-h-5" /> Episodes
          </h3>
          <ul className="tw-list-disc tw-ml-6 tw-space-y-1">
            {episodes.slice(0, showedEpisodes).map((ep) => (
              <li key={ep.id} className="tw-text-gray-700">
                <span className="tw-font-medium">{ep.name}</span>{" "}
                <span className="tw-text-sm tw-text-gray-500">
                  ({ep.episode})
                </span>
              </li>
            ))}
            {episodes.length > showedEpisodes && (
              <button
                onClick={() => setShowedEpisodes(episodes.length)}
                className="tw-text-gray-500 tw-text-sm hover:tw-underline"
              >
                See {episodes.length - showedEpisodes} episodes
              </button>
            )}
            {episodes.length == showedEpisodes && (
              <button
                onClick={() =>
                  setShowedEpisodes(episodes.length - showedEpisodes)
                }
                className="tw-text-blue-500 tw-text-sm hover:tw-underline"
              >
                Hide episodes
              </button>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
