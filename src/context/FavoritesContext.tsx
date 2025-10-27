import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import type { Character } from "../types/character";
import { FavoritesContextType } from "../types/favouriteContext";

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

type FavoritesProviderProps = {
  children: ReactNode;
};

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Character[]>(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character: Character) => {
    setFavorites((prev) => {
      if (prev.some((c) => c.id === character.id)) {
        return prev.filter((c) => c.id !== character.id);
      } else {
        return [...prev, character];
      }
    });
  };

  const isFavorite = (id: number) => favorites.some((c) => c.id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error("useFavorites must be used within a FavoritesProvider");
  return context;
};
