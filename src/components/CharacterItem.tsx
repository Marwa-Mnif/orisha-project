import React from "react";
import { Character } from "../types/character";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";
import gotoSvg from "../assets/goto.svg";
import { CharacterMainProperties } from "./CharacterMainProperties";

type CharacterItemProps = {
  character: Character;
};
export default function CharacterItem({ character }: CharacterItemProps) {
  return (
    <div className=" tw-flex-1 tw-relative  tw-w-full tw-flex-col tw-rounded-[2rem] tw-border-2 tw-border-transparent tw-p-2 hover:tw-border-grey-faint hover:tw-bg-white hover:tw-shadow-sm">
      <div className="tw-relative tw-flex tw-aspect-[0.9] lg:tw-aspect-[0.8] tw-w-full tw-shrink-0 tw-flex-col tw-rounded-3xl tw-bg-faint-grey-1">
        <div className="tw-relative tw-w-full tw-object-cover">
          <img
            className="tw-w-full tw-object-cover tw-rounded-tl-2xl tw-rounded-tr-2xl"
            src={character?.image}
            alt={character?.name}
          />
        </div>
        <div className="tw-flex  tw-m-3  tw-flex-row  tw-z-[5]  tw-group tw-gap-1    tw-items-center tw-justify-center">
          <CharacterMainProperties character={character} />
        </div>
        <div className="tw-absolute tw-top-2 tw-right-2">
          <FavoriteButton characterId={character.id} character={character} />
        </div>
      </div>
      <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-justify-between tw-gap-2">
        <div className="tw-flex tw-flex-col tw-px-4 tw-pt-4">
          <div className="tw-flex tw-items-center tw-justify-between tw-gap-4">
            <h3 className="tw-text-body-small-desktop sm:tw-text-body-small-mobile tw-font-bold tw-font-inter tw-tracking-wide tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-purple-500 tw-via-pink-500 tw-to-red-500">
              {character?.name}
            </h3>
          </div>
          <p className="tw-text-body-small tw-mt-3 tw-line-clamp-3 tw-text-left tw-text-grey"></p>
        </div>
        <div className="tw-flex tw-flex-row  tw-justify-end tw-gap-2">
          <div className="tw-flex tw-items-center tw-self-end tw-pt-2">
            <Link
              to={`/character/${character.id}`}
              className=" tw-z-[5]  tw-flex tw-items-center tw-gap-2 tw-self-end tw-rounded-4xl  tw-border-grey tw-bg-faint-grey-1 tw-p-2 hover:tw-border-2  hover:tw-border-faint-grey-1hover:tw-bg-grey-copy active:tw-bg-grey-copy"
            >
              <div className=" tw-text-body-micro-desktop tw-text-center tw-text-grey tw-font-semibold !tw-leading-6   ">
                En savoir Plus
              </div>
              <img className="tw-h-5 tw-w-5" src={gotoSvg} alt="goto" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
