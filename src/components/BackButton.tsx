import { Link } from "react-router-dom";
import React from "react";

export type BackButtonProps = {
  label: string;
  url: string;
};
export function BackButton({ label, url }: BackButtonProps) {
  return (
    <div className="tw-mb-4">
      <Link
        to={url}
        className="tw-mt-4 tw-text-blue-600 hover:tw-underline tw-font-medium "
      >
        ← {label}
      </Link>{" "}
    </div>
  );
}
