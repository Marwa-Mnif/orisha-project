import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="tw-flex tw-items-center tw-justify-center tw-gap-6 tw-bg-blue-600 tw-h-24 tw-w-full tw-shadow-md tw-px-4">
      <div className="tw-flex tw-items-center tw-justify-center tw-border-2 tw-border-white tw-rounded-full tw-px-6 tw-h-12 tw-bg-gray-200 hover:tw-bg-gray-300 tw-transition tw-duration-300 tw-cursor-pointer">
        <Link
          to="/"
          className="tw-text-white tw-font-bold tw-text-2xl tw-select-none"
        >
          Characters
        </Link>
      </div>
      <nav className="tw-flex tw-items-center tw-gap-4">
        <div className="tw-flex tw-items-center tw-justify-center tw-border-2 tw-border-white tw-rounded-full tw-px-6 tw-h-12 tw-bg-gray-200 hover:tw-bg-gray-300 tw-transition tw-duration-300 tw-cursor-pointer">
          <a
            href="#"
            className="tw-text-white tw-font-bold tw-text-2xl tw-select-none"
          >
            Accueil
          </a>
        </div>
        <div className="tw-flex tw-items-center tw-justify-center tw-border-2 tw-border-white tw-rounded-full tw-px-6 tw-h-12 tw-bg-gray-200 hover:tw-bg-gray-300 tw-transition tw-duration-300 tw-cursor-pointer">
          <a
            href="#"
            className="tw-text-white tw-font-bold tw-text-2xl tw-select-none"
          >
            Favoris
          </a>
        </div>
      </nav>
    </header>
  );
}
