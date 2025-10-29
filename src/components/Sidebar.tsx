import React, { useCallback } from "react";
import { Filters } from "../types/filters";
import { useSearchParams } from "react-router-dom";
import {
  ALIEN_SPECIES,
  ALIVE_STATUS,
  DEAD_STATUS,
  FEMALE_GENDER,
  GENDERLESS_GENDER,
  HUMAN_SPECIES,
  MALE_GENDER,
  UNKNOWN_GENDER,
  UNKNOWN_SPECIES,
  UNKNOWN_STATUS,
} from "../constants";

export default function Sidebar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: Filters = {
    status: searchParams.get("status") ?? undefined,
    species: searchParams.get("species") ?? undefined,
    gender: searchParams.get("gender") ?? undefined,
  };

  const statusOptions = [ALIVE_STATUS, DEAD_STATUS, UNKNOWN_STATUS];
  const speciesOptions = [HUMAN_SPECIES, ALIEN_SPECIES, UNKNOWN_SPECIES];
  const genderOptions = [
    MALE_GENDER,
    FEMALE_GENDER,
    GENDERLESS_GENDER,
    UNKNOWN_GENDER,
  ];

  const handleToggle = useCallback(
    (field: keyof Filters, value: string) => {
      const current = filters[field];
      const newValue = current === value ? undefined : value;
      const newSearchParams = new URLSearchParams(searchParams);
      if (newValue) {
        newSearchParams.set(field, newValue);
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
    <div className="tw-mx-auto  tw-sticky tw-px-4 tw-basis-[21.5%] lg:tw-block">
      <div className="tw-sticky tw-top-20 tw-flex tw-flex-col tw-gap-3 tw-items-center tw-justify-center ">
        <div className=" tw-flex tw-flex-col  tw-items-start tw-justify-center  lg:tw-w-64 tw-p-4  tw-max-w-[calc(100vw-1rem)]  lg:tw-max-h-[calc(100vh-1rem)] tw-overflow-auto  tw-rounded-3xl tw-border-[2px] tw-bg-white tw-text-grey-copy   tw-min-w-min ">
          <div className=" tw-flex md:tw-flex-row tw-gap-3 lg:tw-gap-0 md:tw-gap-3 tw-flex-row lg:tw-flex-col">
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
