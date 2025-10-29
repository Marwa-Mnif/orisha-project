import React from "react";
import { Character } from "../types/character";
import {
  ALIEN_SPECIES,
  ALIVE_STATUS,
  DEAD_STATUS,
  FEMALE_GENDER,
  GENDERLESS_GENDER,
  HUMAN_SPECIES,
  MALE_GENDER,
  UNKNOWN_GENDER,
  UNKNOWN_SPECIES,
} from "../constants";
export type CharacterMainPropertiesProps = {
  character: Character;
};
function CharacterMainProperties({ character }: CharacterMainPropertiesProps) {
  return (
    <>
      <div
        className={`tw-px-2 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium ${
          character.status === ALIVE_STATUS
            ? "tw-bg-green-100 tw-text-green-700"
            : character.status === DEAD_STATUS
            ? "tw-bg-red-100 tw-text-red-700"
            : "tw-bg-gray-300 tw-text-gray-700"
        }`}
      >
        {character.status}
      </div>

      <div
        className={`tw-px-2 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium ${
          character.species === HUMAN_SPECIES
            ? "tw-bg-blue-100 tw-text-blue-700"
            : character.species === ALIEN_SPECIES
            ? "tw-bg-purple-100 tw-text-purple-700"
            : character.species === UNKNOWN_SPECIES
            ? "tw-bg-slate-100 tw-text-slate-700"
            : "tw-bg-yellow-300 tw-text-yellow-700"
        }`}
      >
        {character.species}
      </div>
      <div
        className={`tw-px-2 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium ${
          character.gender === FEMALE_GENDER
            ? "tw-bg-pink-100 tw-text-pink-700"
            : character.gender === MALE_GENDER
            ? "tw-bg-cyan-100 tw-text-cyan-700"
            : character.gender === UNKNOWN_GENDER
            ? "tw-bg-neutral-100 tw-text-neutral-700"
            : character.gender === GENDERLESS_GENDER
            ? "tw-bg-orange-600 tw-text-orange-700"
            : "tw-bg-emerald-400 tw-text-emerald-700"
        }`}
      >
        {character.gender}
      </div>
    </>
  );
}
export default React.memo(CharacterMainProperties);
