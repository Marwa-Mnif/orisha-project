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
    <div className="tw-w-64 tw-p-4 tw-bg-gray-100 tw-h-full tw-flex tw-flex-col tw-gap-4">
      <div>
        <h3 className="tw-font-bold tw-mb-2">Status</h3>
        {statusOptions.map((status) => (
          <label
            key={status}
            className="tw-flex tw-items-center tw-gap-2 tw-mb-1"
          >
            <input
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
              type="checkbox"
              checked={filters.gender === gender}
              onChange={() => handleToggle("gender", gender)}
              className="tw-form-checkbox tw-h-4 tw-w-4"
            />
            {gender}
          </label>
        ))}
      </div>
    </div>
  );
}
