import React, { createContext, useState, useEffect, ReactNode } from "react";
import type { Character } from "../types/character";
import { FavoritesContextType } from "../types/favouriteContext";

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
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
