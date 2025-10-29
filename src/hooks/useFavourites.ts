import { useContext } from "react";
import { FavoritesContextType } from "../types/favouriteContext";
import { FavoritesContext } from "../context/FavoritesContext";

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error("useFavorites must be used within a FavoritesProvider");
  return context;
};
