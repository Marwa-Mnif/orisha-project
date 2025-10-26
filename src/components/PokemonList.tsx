import React, { useState } from "react";
import PokemonItem from "./PokemItem";
import Pagination from "../components/Pagination";
import { useCharacters } from "../hooks/useCharacters";
import Sidebar from "./Sidebar";
import { Filters } from "../types/filters";
import Search from "../components/Search";
import { useDebouncedSearch } from "../hooks/UseDebouncedSearch";

export default function PokemonList() {
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
  if (loading)
    return (
      <div className="tw-grid tw-grid-cols-1 tw-gap-4 lg:tw-h-max lg:tw-grid-cols-3"></div>
    );
  if (error) return <>Error</>;

  return (
    <div className="tw-pt-header tw-bg-grey-faded">
      <div className="tw-flex tw-w-full tw-flex-col tw-items-start tw-justify-between tw-self-stretch tw-px-6 tw-pb-6 tw-pt-10 lg:tw-flex-row lg:tw-p-18 lg:tw-py-10">
        <h1 className="tw-text-medium-desktop tw-mb-6 tw-mr-8 tw-w-full tw-font-inter tw-font-extrabold tw-text-grey lg:tw-mb-0">
          Rick And Morty Characters
        </h1>
      </div>
      <div className="tw-flex tw-items-center tw-justify-center">
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className="tw-flex tw-w-full tw-flex-col tw-px-6 tw-pb-10 tw-pt-6 lg:tw-flex-row lg:tw-gap-10 lg:tw-px-12 lg:tw-py-8 xl:tw-px-18">
        <div className="tw-flex tw-gap-4">
          <Sidebar
            filters={filters}
            onChange={(updatedFilters) => {
              console.log("Filters3003", updatedFilters);
              setFilters(updatedFilters);
            }}
          />
        </div>

        <div className="tw-flex tw-items-center tw-justify-end lg:tw-hidden">
          <button className="tw-text-body-small tw-mb-4 tw-flex tw-items-center tw-gap-2 tw-rounded-[2rem] tw-border-[2px] tw-border-grey-faint tw-py-2 tw-pl-3 tw-pr-4 tw-font-semibold tw-text-grey-copy">
            Filtre
          </button>
        </div>
        <div className=" tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-6 tw-place-items-center">
          {characters?.map((character) => (
            <PokemonItem character={character} />
          ))}
        </div>
      </div>
      <div className="tw-m-4">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
