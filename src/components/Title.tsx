import React from "react";
export type TitleProps = {
  title: string;
  suppClassName?: string;
};
export function Title({ title, suppClassName }: TitleProps) {
  return (
    <h1
      className={`${
        suppClassName +
        "tw-text-4xl md:tw-text-5xl tw-font-extrabold tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-blue-600 tw-to-green-500 tw-text-center tw-my-10 tw-drop-shadow-lg tw-tracking-wide"
      }`}
    >
      {title}
    </h1>
  );
}
