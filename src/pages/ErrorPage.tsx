import { AlertCircle } from "lucide-react";
import React from "react";

export default function ErrorState({
  message = "Something went wrong. Please try again later.",
}) {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-py-24 tw-text-center tw-animate-fadeIn">
      <div className="tw-flex tw-items-center tw-justify-center tw-bg-red-100 tw-rounded-full tw-p-6 tw-mb-6 tw-shadow-sm">
        <AlertCircle className="tw-w-10 tw-h-10 tw-text-red-500" />
      </div>

      <h2 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-2">
        Oops! {message}
      </h2>

      <button
        onClick={() => window.location.reload()}
        className="tw-mt-6 tw-bg-red-500 tw-text-white tw-px-5 tw-py-2 tw-rounded-lg hover:tw-bg-red-600 tw-transition-all tw-text-sm"
      >
        Retry
      </button>
    </div>
  );
}
