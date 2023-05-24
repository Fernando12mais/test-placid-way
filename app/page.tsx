"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

import Image from "next/image";
import HeartIcon from "@/public/icons/heart-icon";
import styles from "./page.module.css";
import picture1 from "@/public/pictures/picture-1.jpg";
import picture2 from "@/public/pictures/picture-2.jpg";
import instructor1 from "@/public/pictures/instructor-1.jpg";
import StarRating from "@/components/star-rating/star-rating";
import Instructor from "@/components/instructor/instructor";
import Calendar from "@/components/calendar/calendar";
import RadioPackage from "@/components/radio-package/radio-package";
import { useState } from "react";
import Accordion from "@/components/accordion/accordion";
import PrimaryButton from "@/components/primary-button/primary-button";
import SecondaryButton from "@/components/secondary-button/secondary-button";
import { useContext } from "react";
import { FavoriteContext } from "@/context/favorites-context";
import { Favorite } from "@/models/favorites-context";

export default function Home() {
  const images = [picture1, picture2];
  const [selected, setSelected] = useState("");
  const [selectedDay, setSelectedDay] = useState(new Date());
  const { setFavorites, favorites } = useContext(FavoriteContext);

  const content: Favorite = {
    id: 1,
    images,
    title:
      "7 Day All-inclusive Italy Luxury Culinary Vacation in Beautiful Roman Countryside",
  };

  const isFavorite = favorites.some((favorite) => favorite.id == content.id);

  function handleSelectFavorite() {
    if (!isFavorite) {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, content])
      );

      return setFavorites((prevState) => [...prevState, content]);
    }

    localStorage.removeItem("favorites");

    setFavorites((prevState) =>
      prevState.filter((favorite) => favorite.id !== content.id)
    );
  }

  return (
    <main className="content-wrapper">
      <Carousel showThumbs={false}>
        {images.map((image) => (
          <div key={image.src} className="position-relative">
            <button
              className={styles["heart-btn"]}
              onClick={handleSelectFavorite}
            >
              <HeartIcon
                className={`${styles.icon} ${
                  isFavorite ? styles.favorite : ""
                }`}
              />
            </button>

            <div className={styles.image}>
              <Image src={image} alt="trip-picture" priority fill />
            </div>
          </div>
        ))}
      </Carousel>

      <section className={styles.section}>
        <h1>{content.title}</h1>

        <StarRating />

        <p className={styles.description}>
          La Cucina Sabina, Strada Provinciale Pascolare 164, Palombara Sabina,
          Rome, Lazio, Italy
        </p>
      </section>

      <section className={styles.section}>
        <label className={styles["label-description"]}>Overview</label>
        <h2>Luxury Cooking Holiday on Mountains near Rome, Italy</h2>
        <div className="p-3">
          <p className={styles.tip}>
            This listing has one of the 10 most popular offers available in the
            website
          </p>
        </div>
        <p className="fw-light">
          La Cucina Sabina&nbsp;hosts a luxury culinary and cultural vacation
          program at a private, modern villa. La Cucina Sabina combines food,
          culture, exclusive excursions, and fun into an experience of a
          lifetime! You will enjoy access to places and people you would never
          find on your own. This creates a unique experience that is
          unforgettable. When you depart after a week of the hospitality, you
          all feel like you got to know the “real Italy” and their people and
          culture.&nbsp;
        </p>
        <h3 className="text-center">Meet the instructors</h3>

        <div className="d-flex gap-3 align-items-center justify-content-center">
          <Instructor name="Instructor name" picture={instructor1} />
        </div>
        <h3 className="my-3">Highlights</h3>
        <ul>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            perspiciatis non eum adipisci? Voluptatum eveniet quod cumque
            sapiente possimus, nihil, rem quibusdam vel ab porro, illo
            voluptates. Fugit, autem libero!
          </li>
        </ul>
        <h3>Skill level</h3>
        <ul className="my-3">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            vitae enim molestias, ipsum cupiditate voluptas sapiente recusandae
            atque, repellendus animi iusto necessitatibus ducimus? Odit dolores
            eveniet magni aliquam tempore deleniti?
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <span className={styles.days}>7 days / 6 nights</span>
        <div className="d-flex align-items-center gap-3">
          <span className={styles.from}>From</span>
          <span className={styles.price}>$23.000</span>
        </div>

        <h4>Pricing information</h4>
        <p>There is a single supplement of 500 USD for solo travelers.</p>
        <h4>Availability</h4>
        <p>
          This vacation is available all year round with arrival on Sunday.
          Please select an arrival date below.
        </p>
        <div className="my-3">
          <Calendar
            tileDisabled={({ date }) => {
              return (
                date.getTime() < new Date().getTime() ||
                (date.getDay() != 0 && date.getDay() != 6)
              );
            }}
            tileClassName={({ date }) => {
              const finalDate = new Date(
                selectedDay.getFullYear(),
                selectedDay.getMonth(),
                selectedDay.getDate()
              );
              finalDate.setDate(selectedDay.getDate() + 7);

              if (
                date.getTime() >= selectedDay.getTime() &&
                date.getTime() < finalDate.getTime()
              )
                return styles["date-selected"];
            }}
            value={selectedDay}
            onChange={(date) => setSelectedDay(date as Date)}
          />
        </div>

        <h4>Select your package</h4>

        <RadioPackage
          description="Private double room"
          details="Shared villa - Ground floor"
          price={2500}
          selected={selected === "1"}
          title="Title"
          name={"title"}
          value={"1"}
          onChange={(value) => {
            setSelected(value);
          }}
        />
        <RadioPackage
          description="Private double room"
          details="Shared villa - Ground floor"
          price={4500}
          selected={selected === "2"}
          title="Title"
          name={"title"}
          value={"2"}
          onChange={(value) => {
            setSelected(value);
          }}
        />

        <Accordion />

        <div className="position-sticky bottom-0 d-flex flex-column gap-3 justify-content-center align-items-center bg-white p-3 w-100">
          <PrimaryButton>Send inquiry</PrimaryButton>
          <SecondaryButton>Request to book</SecondaryButton>
        </div>
      </section>
    </main>
  );
}
