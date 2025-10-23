import React from "react"
export default function Footer() {
  return  (
 <footer className="tw-w-full tw-bg-blue-600 tw-h-20 tw-flex tw-items-center tw-justify-center tw-gap-4 tw-px-4 tw-shadow-inner">
  <p className="tw-text-white tw-text-center tw-text-lg">
    © 2025 Pokemon App. All rights reserved.
  </p>
  <div className="tw-flex tw-gap-3">
    <a href="#" className="tw-text-white hover:tw-text-gray-300 tw-transition tw-duration-300">
      About
    </a>
    <a href="#" className="tw-text-white hover:tw-text-gray-300 tw-transition tw-duration-300">
      Contact
    </a>
  </div>
</footer>

)
}
