import React from "react";
import { Filters } from "../types/filters";

type SidebarProps = {
  filters: Filters;
  onChange: (filters: Filters) => void;
};

export default function Sidebar({ filters, onChange }: SidebarProps) {
  const statusOptions = ["Alive", "Dead", "unknown"];
  const speciesOptions = ["Human", "Alien", "unknown"];
  const genderOptions = ["Male", "Female", "Genderless", "unknown"];

  const handleToggle = (field: keyof Filters, value: string) => {
    onChange({
      ...filters,
      [field]: filters[field] === value ? undefined : value,
    });
  };

  return (
    <div className="tw-mx-auto  tw-sticky tw-px-4 tw-basis-[21.5%] lg:tw-block">
      <div className=" lg:tw-w-64 tw-p-4 tw-sticky tw-top-20 tw-max-w-[calc(100vw-1rem)]  lg:tw-max-h-[calc(100vh-1rem)] tw-overflow-auto  tw-flex md:tw-flex-row tw-gap-3 lg:tw-gap-0 md:tw-gap-3 tw-flex-row lg:tw-flex-col tw-rounded-3xl tw-border-[2px] tw-bg-white tw-text-grey-copy   tw-min-w-min ">
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
                checked={filters.status === status}
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
                checked={filters.species === species}
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
                checked={filters.gender === gender}
                onChange={() => handleToggle("gender", gender)}
              />
              {gender}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
