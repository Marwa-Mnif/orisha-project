import { Link, NavLink } from "react-router-dom";
import { Heart, Home, Users } from "lucide-react";
import React from "react";

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

        <nav className="tw-flex tw-items-center tw-gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `tw-flex tw-items-center tw-gap-1 tw-font-medium ${
                isActive
                  ? "tw-text-blue-600"
                  : "tw-text-gray-700 hover:tw-text-blue-600"
              }`
            }
          >
            <Home className="tw-w-5 tw-h-5" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/characters"
            className={({ isActive }) =>
              `tw-flex tw-items-center tw-gap-1 tw-font-medium ${
                isActive
                  ? "tw-text-blue-600"
                  : "tw-text-gray-700 hover:tw-text-blue-600"
              }`
            }
          >
            <Users className="tw-w-5 tw-h-5" />
            <span>Characters</span>
          </NavLink>

          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              `tw-flex tw-items-center tw-gap-1 tw-font-medium ${
                isActive
                  ? "tw-text-blue-600"
                  : "tw-text-gray-700 hover:tw-text-blue-600"
              }`
            }
          >
            <Heart className="tw-w-5 tw-h-5" />
            <span>Favorites</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
