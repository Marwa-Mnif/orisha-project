import { Link } from "react-router-dom";
import { Star, Users, Search } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div className="tw-min-h-screen tw-bg-gradient-to-b tw-from-blue-50 tw-to-white tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-6 tw-text-center">
      <div className="tw-max-w-3xl tw-space-y-6 tw-animate-fadeIn">
        <h1 className="tw-text-5xl md:tw-text-6xl tw-font-extrabold tw-text-blue-700 tw-drop-shadow-sm">
          Welcome to the <span className="tw-text-green-600">Rick & Morty</span>{" "}
          Universe 🌌
        </h1>

        <p className="tw-text-gray-600 tw-text-lg md:tw-text-xl tw-max-w-2xl tw-mx-auto">
          Explore all your favorite characters, their origins, and adventures —
          and don’t forget to save the ones you love most 💚.
        </p>

        <div className="tw-flex tw-flex-wrap tw-gap-4 tw-justify-center tw-mt-8">
          <Link
            to="/characters"
            className="tw-flex tw-items-center tw-gap-2 tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-font-semibold tw-px-6 tw-py-3 tw-rounded-full tw-shadow-md tw-transition-transform hover:tw-scale-105"
          >
            <Users className="tw-w-5 tw-h-5" />
            View Characters
          </Link>

          <Link
            to="/favourites"
            className="tw-flex tw-items-center tw-gap-2 tw-bg-yellow-400 hover:tw-bg-yellow-500 tw-text-gray-800 tw-font-semibold tw-px-6 tw-py-3 tw-rounded-full tw-shadow-md tw-transition-transform hover:tw-scale-105"
          >
            <Star className="tw-w-5 tw-h-5" />
            My Favorites
          </Link>

          <Link
            to="/characters"
            className="tw-flex tw-items-center tw-gap-2 tw-bg-green-500 hover:tw-bg-green-600 tw-text-white tw-font-semibold tw-px-6 tw-py-3 tw-rounded-full tw-shadow-md tw-transition-transform hover:tw-scale-105"
          >
            <Search className="tw-w-5 tw-h-5" />
            Search
          </Link>
        </div>
      </div>

      <div className="tw-mt-8  tw-animate-float ">
        <img
          src="/src/assets/RickAndMorty.jpg"
          alt="Rick and Morty"
          className="tw-w-64 md:tw-w-80  tw-rounded-2xl"
        />
      </div>
    </div>
  );
}
