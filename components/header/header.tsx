"use client";

import LogoIcon from "@/public/icons/logo-icon";
import styles from "./header.module.css";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "@/public/icons/menu-icon";
import CrossIcon from "@/public/icons/cross-icon";
import HeartIcon from "@/public/icons/heart-icon";
import UserIcon from "@/public/icons/user-icon";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className={styles["nav-bar"]}>
        <Menu
          customBurgerIcon={
            <MenuIcon className={`${styles["icon"]} ${styles["icon-fill"]}`} />
          }
          customCrossIcon={
            <CrossIcon className={`${styles["icon"]} ${styles["icon-fill"]}`} />
          }
        />
        <div className={`content-wrapper ${styles["nav-wrapper"]}`}>
          <Link href="/">
            <LogoIcon className={`${styles["icon"]} ${styles["icon-fill"]}`} />
          </Link>

          <div className="d-flex align-items-center gap-3">
            <Link href="/favorites">
              <HeartIcon
                className={`${styles["icon"]} ${styles["icon-outline"]}`}
              />
            </Link>

            <UserIcon
              className={`${styles["icon"]} ${styles["icon-outline"]}`}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
