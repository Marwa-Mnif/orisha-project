import React from "react";
import { Character } from "../types/character";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";
import gotoSvg from "../assets/goto.svg";
type PokemItemProps = {
  character: Character;
};
export default function PokemonItem({ character }: PokemItemProps) {
  return (
    <div className=" tw-flex-1 tw-relative  tw-w-full tw-flex-col tw-rounded-[2rem] tw-border-2 tw-border-transparent tw-p-2 hover:tw-border-grey-faint hover:tw-bg-white hover:tw-shadow-sm">
      <div className="tw-relative tw-flex tw-aspect-[0.8] tw-w-full tw-shrink-0 tw-flex-col tw-overflow-hidden tw-rounded-3xl tw-bg-faint-grey-1">
        <div className="tw-relative tw-w-full tw-object-cover">
          <img
            className="tw-w-full tw-object-cover"
            src={character?.image}
            alt={character?.name}
          />
        </div>
        <div className="tw-absolute tw-top-2 tw-right-2">
          <FavoriteButton characterId={character.id} />
        </div>
        <div className="tw-flex tw-flex-row tw-absolute tw-z-[5]  tw-group tw-gap-2  tw-bottom-4 tw-right-4  tw-items-center tw-justify-center">
          <div
            className={`tw-text-body-small-mobile tw-font-inter  tw-pt-1 tw-pb-1   tw-p-1 tw-flex tw-items-center tw-gap-2 tw-rounded-[3px]  ${
              character.status === "Alive"
                ? "tw-bg-green-500"
                : character.status === "Dead"
                ? "tw-bg-red-500"
                : "tw-bg-gray-500"
            }`}
          >
            {character.status}
          </div>

          <div
            className={`tw-text-body-small-mobile tw-font-inter  tw-p-1 tw-pt-1 tw-pb-1 tw-flex tw-items-center tw-gap-2 tw-rounded-[3px]  ${
              character.species === "Human"
                ? "tw-bg-blue-500"
                : character.species === "Alien"
                ? "tw-bg-purple-500"
                : character.species === "Robot"
                ? "tw-bg-slate-800"
                : "tw-bg-yellow-500"
            }`}
          >
            {character.species}
          </div>
        </div>
      </div>
      <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-justify-between tw-gap-2">
        <div className="tw-flex tw-flex-col tw-px-4 tw-pt-4">
          <div className="tw-flex tw-items-center tw-justify-between tw-gap-4">
            <h3 className="tw-text-body-large tw-font-britanica tw-font-bold tw-text-black-background">
              {character?.name}
            </h3>
            <span className="tw-text-body-large tw-font-medium tw-text-grey"></span>
          </div>
          <p className="tw-text-body-small tw-mt-3 tw-line-clamp-3 tw-text-left tw-text-grey"></p>
        </div>
        <div className="tw-flex tw-flex-row {% unless  product.template_suffix == ''  %} tw-justify-center {% else  %} tw-justify-end {% endunless %} tw-gap-2">
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
