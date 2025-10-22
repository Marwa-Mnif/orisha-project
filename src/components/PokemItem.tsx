import React from "react";

export default function PokemonItem() {
  return (

  <div
    className="tw-custom-transition-2 tw-relative tw-flex tw-w-full tw-flex-col tw-rounded-[2rem] tw-border-2 tw-border-transparent tw-p-2 hover:tw-border-grey-faint hover:tw-bg-white hover:tw-shadow-sm"
  >
    <div
      className="tw-relative tw-flex tw-aspect-[1.3] tw-w-full tw-shrink-0 tw-flex-col tw-overflow-hidden tw-rounded-3xl tw-bg-faint-grey-1"
    >
   

     Image
     
      
        <a
          href="{{ product.metafields.custom.notice_du_produit.value.url }}"
          target="_blank"
          className="tw-text-body-small tw-group tw-absolute tw-bottom-2 tw-right-2 tw-z-[5] tw-flex tw-items-center tw-gap-2 tw-rounded-[2rem] tw-bg-transparent tw-py-1 tw-pl-4 tw-pr-2 tw-font-semibold tw-text-black tw-ring-1 tw-ring-black hover:tw-bg-grey-faint active:tw-bg-grey-light"
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="tw-shrink-0"
          >
            <path d="M2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8Z" fill="#0C0C0C" stroke="#1d1d1d" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 8H10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 6V10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
    </div>
    <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-justify-between tw-gap-2">
      <div
        className="tw-flex tw-flex-col tw-px-4 tw-pt-4"
      >
        <div className="tw-flex tw-items-center tw-justify-between tw-gap-4">
          <h3 className="tw-text-body-large tw-line-clamp-2 tw-font-medium tw-text-black-background">
           TITLE
          </h3>
          <span className="tw-text-body-large tw-font-medium tw-text-grey">
           
          </span>
        </div>
        <p className="tw-text-body-small tw-mt-3 tw-line-clamp-3 tw-text-left tw-text-grey">
        
        </p>
      </div>
      <div
        className="tw-flex tw-flex-row {% unless  product.template_suffix == ''  %} tw-justify-center {% else  %} tw-justify-end {% endunless %} tw-gap-2"
      >
        
          <div className="tw-flex tw-items-center tw-self-end tw-pt-2">
            <button
              className="tw-text-body-medium tw-custom-transition-2 tw-z-[5] tw-m-2  tw-flex tw-items-center tw-gap-2 tw-self-end tw-rounded-4xl tw-border-2 tw-border-grey tw-bg-faint-grey-1 tw-p-2 tw-px-4  tw-font-semibold !tw-leading-6 tw-text-grey    "
            >
              LABEL
            </button>
          </div>
        <div
          className="tw-flex tw-items-center tw-self-end tw-pt-2"
        >
          <button
            className="tw-text-body-medium tw-custom-transition-2 tw-z-[5] tw-m-2 tw-flex tw-items-center tw-gap-2 tw-self-end tw-rounded-4xl   tw-bg-blue1 tw-p-2 tw-pr-4 tw-font-semibold !tw-leading-6 tw-text-white   hover:tw-bg-blue-mid active:tw-bg-blue-deep"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="tw-size-5 tw-shrink-0 tw-animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
            </svg>
           

            CTA LABEL
          </button>
        </div>
      </div>
    </div>
  </div>
              )
}
