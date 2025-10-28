import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export type BackButtonProps = {
  label?: string;
  url?: string;
};
function BackButton({ label = "Back", url }: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (url) {
      navigate(url);
    } else {
      navigate(-1);
    }
  };
  return (
    <div className="tw-mb-4">
      <button
        onClick={handleClick}
        className="tw-flex tw-items-center tw-gap-2"
      >
        <ArrowLeft
          className="tw-color-blue-600 tw-w-5 tw-h-5"
          color="#2563eb"
        />
        <span className="tw-text-blue-600 tw-font-inter tw-font-medium hover:tw-underline hover:tw-cursor-pointer">
          {label}
        </span>
      </button>
    </div>
  );
}
export default React.memo(BackButton);
