import { useParams, Link } from "react-router-dom";
import { useLocationDetails } from "../hooks/useLocationDetails";
import { Loader2, MapPin, Globe, Users } from "lucide-react";
import React from "react";

export default function LocationDetails() {
  const { id } = useParams<{ id: string }>();
  const { locationData, loading, error } = useLocationDetails(Number(id));

  if (loading)
    return (
      <div className="tw-flex tw-justify-center tw-items-center tw-h-[80vh]">
        <Loader2 className="tw-w-12 tw-h-12 tw-animate-spin tw-text-blue-600" />
      </div>
    );

  if (error || !locationData)
    return (
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-[80vh]">
        <p className="tw-text-red-600 tw-text-lg tw-font-semibold">
          ⚠️ Unable to load location details
        </p>
        <Link
          to="/"
          className="tw-mt-4 tw-text-blue-600 hover:tw-underline tw-font-medium"
        >
          ← Back to list
        </Link>
      </div>
    );

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-gap-6 tw-py-12 tw-px-6 tw-max-w-3xl tw-mx-auto">
      <h1 className="tw-text-4xl tw-font-bold tw-text-blue-600 tw-text-center">
        {locationData.name}
      </h1>

      <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-8 tw-w-full tw-space-y-4">
        <div className="tw-flex tw-items-center tw-gap-3">
          <MapPin className="tw-text-blue-500" />
          <p className="tw-font-semibold">
            <span className="tw-text-gray-600">Type:</span>{" "}
            {locationData.type || "Unknown"}
          </p>
        </div>

        <div className="tw-flex tw-items-center tw-gap-3">
          <Globe className="tw-text-green-500" />
          <p className="tw-font-semibold">
            <span className="tw-text-gray-600">Dimension:</span>{" "}
            {locationData.dimension || "Unknown"}
          </p>
        </div>

        <div className="tw-flex tw-items-start tw-gap-3">
          <Users className="tw-text-purple-500 tw-mt-1" />
          <div>
            <p className="tw-font-semibold tw-text-gray-600">Residents:</p>
            {locationData.residents.length > 0 ? (
              <ul className="tw-list-disc tw-ml-6 tw-text-gray-800 tw-space-y-1">
                {locationData.residents.slice(0, 10).map((url) => {
                  const id = url?.split("/").pop();
                  return (
                    <li key={id}>
                      <Link
                        to={`/character/${id}`}
                        className="tw-text-blue-600 hover:tw-underline"
                      >
                        Character #{id}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="tw-text-gray-500">No known residents</p>
            )}
          </div>
        </div>
      </div>

      <Link
        to="/"
        className="tw-mt-6 tw-text-blue-600 hover:tw-underline tw-font-semibold"
      >
        ← Back to characters
      </Link>
    </div>
  );
}
