import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="tw-bg-gradient-to-r tw-from-blue-50 tw-to-green-50 tw-border-t tw-border-gray-200 ">
      <div className="tw-max-w-6xl tw-mx-auto tw-px-6 tw-py-10 tw-text-center md:tw-text-left md:tw-flex md:tw-justify-between md:tw-items-center">
        <div className="tw-flex tw-flex-col tw-items-center md:tw-items-start tw-gap-2">
          <Link
            to="/"
            className="tw-flex tw-items-center tw-gap-2 tw-text-blue-700 hover:tw-text-blue-800 tw-transition-colors"
          >
            <img
              src="/src/assets/Logo.jpg"
              alt="Rick & Morty Logo"
              className="tw-w-8 tw-h-8 tw-rounded-full"
            />
            <span className="tw-font-bold tw-text-lg">
              Rick & Morty Explorer
            </span>
          </Link>
          <p className="tw-text-sm tw-text-gray-600 tw-max-w-xs">
            Explore the universe of Rick & Morty – characters, locations, and
            episodes.
          </p>
        </div>

        <div className="tw-flex tw-justify-center tw-gap-6 tw-mt-6 md:tw-mt-0">
          <a
            href="https://github.com/Marwa-Mnif/orisha-project"
            target="_blank"
            rel="noopener noreferrer"
            className="tw-text-gray-600 hover:tw-text-blue-600 tw-transition-colors"
          >
            <Github className="tw-w-5 tw-h-5" />
          </a>
          <a
            href="www.linkedin.com/in/marwa-mnif"
            target="_blank"
            rel="noopener noreferrer"
            className="tw-text-gray-600 hover:tw-text-blue-600 tw-transition-colors"
          >
            <Linkedin className="tw-w-5 tw-h-5" />
          </a>
          <a
            href="mailto:marwa.mnif@hotmail.com"
            className="tw-text-gray-600 hover:tw-text-blue-600 tw-transition-colors"
          >
            <Mail className="tw-w-5 tw-h-5" />
          </a>
        </div>
      </div>

      <div className="tw-border-t tw-border-gray-200 tw-py-4 tw-text-center">
        <p className="tw-text-sm tw-text-gray-500">
          © {new Date().getFullYear()} Rick & Morty Explorer — Crafted with 💙
          by Marwa Mnif
        </p>
      </div>
    </footer>
  );
}
