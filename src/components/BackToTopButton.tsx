import React, { useState, useEffect } from "react";
import { CircleArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="tw-fixed tw-bottom-6 tw-right-6 tw-bg-purple-500 hover:tw-bg-purple-600 tw-text-white tw-p-3 tw-rounded-full tw-shadow-lg tw-transition-opacity tw-duration-300 tw-z-50"
      aria-label="Remonter en haut"
    >
      <CircleArrowUp className="w-6 h-6" />
    </button>
  );
}
