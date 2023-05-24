"use client";

import { FavoritesContextProps } from "@/models/favorites-context";
import { ReactNode, createContext, useEffect, useState } from "react";
const defaultValue: FavoritesContextProps = {
  favorites: [],
  setFavorites: () => {},
};
export const FavoriteContext =
  createContext<FavoritesContextProps>(defaultValue);

export default function FavoritesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favorites, setFavorites] = useState(defaultValue.favorites);

  useEffect(() => {
    const cachedFavorites = localStorage.getItem("favorites");
    if (cachedFavorites) {
      setFavorites(JSON.parse(cachedFavorites));
    }
  }, []);
  return (
    <FavoriteContext.Provider value={{ setFavorites, favorites }}>
      {children}
    </FavoriteContext.Provider>
  );
}
