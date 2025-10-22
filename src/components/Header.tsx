import React from "react";

export default function Header() {
  return   (
  <div className="tw-flex tw-flex-row tw-bg-blue-600 tw-h-24 tw-w-full tw-gap-12 tw-items-center tw-justify-center ">
    <div className="tw-flex tw-items-center tw-border-2 tw-border-white tw-justify-center tw-p-4 tw-rounded-4xl hover:tw-bg-grey  tw-bg-grey-copy tw-h-12 tw-min-w-6">
      <a href="#" className="tw-z-10 tw-text-center tw-text-white tw-text-2xl tw-font-[Britanica] tw-font-bold tw-cursor-pointer">
        Pokemon
      </a>
    </div>
      <div className="tw-flex tw-items-center tw-border-2 tw-border-white tw-justify-center tw-p-4 tw-rounded-4xl tw-bg-grey-copy hover:tw-bg-grey  tw-h-12 tw-min-w-6">
      <a href="#" className="tw-z-10 tw-text-center tw-text-white tw-text-2xl tw-font-[Britanica] tw-font-bold tw-cursor-pointer">
        Accueil
      </a>
    </div>
  </div>
)
}
