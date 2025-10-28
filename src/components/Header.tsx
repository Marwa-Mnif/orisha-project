import { Link } from "react-router-dom";
import React from "react";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Header() {
  return (
    <header className="tw-bg-white tw-shadow-md tw-sticky tw-top-0 tw-z-50">
      <div className="tw-max-w-6xl tw-mx-auto tw-flex tw-items-center tw-justify-between tw-px-6 tw-py-4">
        <Link
          to="/"
          className="tw-flex tw-items-center tw-gap-2 tw-text-blue-600 hover:tw-text-blue-700 tw-transition-colors"
        >
          <img
            src="/src/assets/Logo.jpg"
            alt="Rick & Morty Portal"
            className="tw-w-8 tw-h-8 tw-rounded-full tw-shadow-sm"
          />
          <span className="tw-text-2xl tw-font-bold">Rick & Morty</span>
        </Link>

        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  );
}
