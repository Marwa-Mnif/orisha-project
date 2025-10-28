import React, { useCallback } from "react";
import { Filters } from "../types/filters";
import { useSearchParams } from "react-router-dom";

export default function Sidebar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: Filters = {
    status: searchParams.get("status")?.split(","),
    species: searchParams.get("species")?.split(","),
    gender: searchParams.get("gender")?.split(","),
  };

  const statusOptions = ["Alive", "Dead", "unknown"];
  const speciesOptions = ["Human", "Alien", "unknown"];
  const genderOptions = ["Male", "Female", "Genderless", "unknown"];

  const handleToggle = useCallback(
    (field: keyof Filters, value: string) => {
      const current = filters[field] ?? [];
      let newValues: string[];
      if (current.includes(value)) {
        newValues = current.filter((v) => v !== value);
      } else {
        newValues = [...current, value];
      }

      const newSearchParams = new URLSearchParams(searchParams);
      if (newValues.length > 0) {
        newSearchParams.set(field, newValues.join(","));
      } else {
        newSearchParams.delete(field);
      }

      setSearchParams(newSearchParams);
    },
    [filters, searchParams, setSearchParams]
  );

  const resetFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="tw-mx-auto tw-sticky tw-px-4 tw-basis-[21.5%] lg:tw-block">
      <div className="tw-flex tw-flex-col tw-gap-3 tw-items-center tw-justify-center">
        <div className="tw-flex tw-flex-col tw-items-start tw-justify-center lg:tw-w-64 tw-p-4 tw-sticky tw-top-20 tw-max-w-[calc(100vw-1rem)] lg:tw-max-h-[calc(100vh-1rem)] tw-overflow-auto tw-rounded-3xl tw-border-[2px] tw-bg-white tw-text-grey-copy tw-min-w-min">
          <div className="tw-flex md:tw-flex-row tw-gap-3 lg:tw-gap-0 md:tw-gap-3 tw-flex-row lg:tw-flex-col">
            <div>
              <h3 className="tw-font-bold tw-mb-2">Status</h3>
              {statusOptions.map((status) => (
                <label
                  key={status}
                  className="tw-flex tw-items-center tw-gap-2 tw-mb-1"
                >
                  <input
                    className="tw-rounded-[3px]"
                    type="checkbox"
                    checked={filters.status?.includes(status)}
                    onChange={() => handleToggle("status", status)}
                  />
                  {status}
                </label>
              ))}
            </div>

            <div>
              <h3 className="tw-font-bold tw-mb-2">Species</h3>
              {speciesOptions.map((species) => (
                <label
                  key={species}
                  className="tw-flex tw-items-center tw-gap-2 tw-mb-1"
                >
                  <input
                    className="tw-rounded-[3px]"
                    type="checkbox"
                    checked={filters.species?.includes(species)}
                    onChange={() => handleToggle("species", species)}
                  />
                  {species}
                </label>
              ))}
            </div>

            <div>
              <h3 className="tw-font-bold tw-mb-2">Gender</h3>
              {genderOptions.map((gender) => (
                <label
                  key={gender}
                  className="tw-flex tw-items-center tw-gap-2 tw-mb-1"
                >
                  <input
                    className="tw-rounded-[3px]"
                    type="checkbox"
                    checked={filters.gender?.includes(gender)}
                    onChange={() => handleToggle("gender", gender)}
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>

          <div className="tw-mx-auto">
            <button
              onClick={resetFilters}
              className="tw-text-blue-500 tw-text-sm hover:tw-underline"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
