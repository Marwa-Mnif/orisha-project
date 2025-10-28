import React, { useState } from "react";
import CharacterItem from "../components/CharacterItem";
import Pagination from "../components/Pagination";
import { useCharacters } from "../hooks/useCharacters";
import Sidebar from "../components/Sidebar";
import { Filters } from "../types/filters";
import Search from "../components/Search";
import { useDebouncedSearch } from "../hooks/useDebouncedSearch";
import FullPageLoader from "./FullPageLoader";
import ErrorPage from "./ErrorPage";
import Title from "../components/Title";

function CharacterList() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Filters>({
    status: undefined,
    species: undefined,
    gender: undefined,
  });
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebouncedSearch(search, 1000);
  const { characters, loading, error, totalPages } = useCharacters(
    page,
    debouncedSearch,
    filters
  );
  if (loading) return <FullPageLoader />;
  if (error || !characters)
    return <ErrorPage message="No character available 😢" />;

  return (
    <div className="tw-pt-header tw-bg-grey-faded">
      <div className="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-self-stretch tw-p-4 lg:tw-px-6 lg:tw-pb-6 lg:tw-pt-10 lg:tw-flex-row lg:tw-p-18 lg:tw-py-10">
        <Title
          title="Meet the Multiverse’s Finest"
          suppClassName="tw-text-center"
        />
      </div>
      <div className="tw-flex tw-items-center tw-justify-center tw-pt-6">
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className="tw-flex tw-w-full tw-flex-col tw-px-6 tw-pb-10 tw-pt-6 lg:tw-flex-row lg:tw-gap-10 lg:tw-px-12 lg:tw-py-8 xl:tw-px-18">
        <div className="tw-flex ">
          <Sidebar
            filters={filters}
            onChange={(updatedFilters) => {
              setFilters(updatedFilters);
            }}
          />
        </div>

        <div className=" tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-6 tw-place-items-center">
          {characters?.map((character, index) => (
            <CharacterItem key={index} character={character} />
          ))}
        </div>
      </div>
      <div className="tw-p-4">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
export default React.memo(CharacterList);
