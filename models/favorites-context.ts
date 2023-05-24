import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export type Favorite = {
  id: number;
  images: StaticImageData[];
  title: string;
};

export type FavoritesContextProps = {
  setFavorites: Dispatch<SetStateAction<Favorite[]>>;
  favorites: Favorite[];
};
