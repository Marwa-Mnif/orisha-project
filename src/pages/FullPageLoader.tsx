import React from "react";

export default function FullPageLoader() {
  return (
    <div className="tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-bg-opacity-80 tw-z-50">
      <div className="tw-flex tw-flex-col tw-items-center">
        <div className="tw-animate-spin tw-rounded-full tw-h-16 tw-w-16 tw-border-t-4 tw-border-b-4 tw-border-blue-600"></div>
        <p className="tw-mt-4 tw-text-xl tw-text-blue-600 tw-font-semibold">
          Loading...
        </p>
      </div>
    </div>
  );
}
