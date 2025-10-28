import { Heart, Home, Users } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  CHARACTERS_MENU_ITEM,
  FAVORITES_MENU_ITEM,
  HOME_MENU_ITEM,
} from "../constants";

export default function DesktopMenu() {
  return (
    <nav className="tw-hidden lg:tw-flex tw-items-center tw-gap-6">
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
        <span>{HOME_MENU_ITEM}</span>
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
        <span>{CHARACTERS_MENU_ITEM}</span>
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
        <span>{FAVORITES_MENU_ITEM}</span>
      </NavLink>
    </nav>
  );
}
