import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="tw-block lg:tw-hidden tw-focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="lg:tw-hidden  tw-absolute tw-top-full tw-left-0 tw-w-full tw-flex tw-justify-end tw-px-6 tw-z-40"
        >
          <div className="tw-bg-white/20 tw-backdrop-blur-xl tw-rounded-2xl tw-shadow-2xl tw-p-6 tw-mt-2 tw-animate-slide-down tw-w-56 tw-text-gray-600 tw-font-semibold">
            <Link to="/" className="tw-block tw-py-2 hover:tw-text-yellow-300">
              Home
            </Link>
            <Link
              to="/characters"
              className="tw-block tw-py-2 hover:tw-text-yellow-300"
            >
              Characters
            </Link>
            <Link
              to="/favourites"
              className="tw-block tw-py-2 hover:tw-text-yellow-300"
            >
              Favoris
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
