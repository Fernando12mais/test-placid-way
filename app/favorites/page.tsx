"use client";

import { FavoriteContext } from "@/context/favorites-context";
import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  const { favorites } = useContext(FavoriteContext);
  return (
    <main className={`content-wrapper ${styles.main}`}>
      <h1 className="text-center my-5">Favorites</h1>

      <div className="d-flex flex-column align-items-center gap-3">
        {favorites.map((favorite) => (
          <div
            key={favorite.id}
            className="d-flex flex-column align-items-center gap-3"
          >
            <div className={styles.image}>
              <Image
                className="rounded-2"
                alt="package-image"
                src={favorite.images[0]}
                fill
              />
            </div>
            <Link className={styles.link} href={"/"}>
              {favorite.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
