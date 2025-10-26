import React from "react";
type SearchProps = {
  search: string;
  setSearch: (search: string) => void;
};
export default function Search({ search, setSearch }: SearchProps) {
  return (
    <input
      type="text"
      placeholder="Search for a character..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className=" tw-text-center tw-rounded-3xl tw-border-[2px] tw-bg-white tw-border-[#e5e7eb] tw-text-grey-copy tw-w-64 tw-p-2  tw-mb-4"
    />
  );
}
