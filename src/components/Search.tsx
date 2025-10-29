import React, { useCallback } from "react";
import searchIcon from "../assets/search.svg";
import { CircleX } from "lucide-react";
type SearchProps = {
  search: string;
  setSearch: (search: string) => void;
};
function Search({ search, setSearch }: SearchProps) {
  const handleSetSearch = useCallback((search: string) => {
    setSearch(search);
  }, []);
  return (
    <div className="tw-mx-12 lg:tw-px-0 tw-relative  lg:tw-w-80">
      <input
        type="text"
        placeholder="Search for a character..."
        value={search}
        onChange={(e) => handleSetSearch(e.target.value)}
        className=" tw-w-full tw-pl-10 tw-pr-3 tw-py-2 tw-border tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-blue-500"
      />
      <button
        onClick={() => handleSetSearch("")}
        className="tw-absolute tw-right-3 tw-top-1/2 tw-transform tw--translate-y-1/2 "
      >
        <CircleX className="tw-h-5 tw-w-5" color="#6b7280" />
      </button>
      <div className="tw-absolute tw-left-3 tw-top-1/2 tw-transform tw--translate-y-1/2 tw-text-gray-400">
        <img className="tw-h-5 tw-w-5" src={searchIcon} alt="searchIcon" />
      </div>
    </div>
  );
}
export default React.memo(Search);
