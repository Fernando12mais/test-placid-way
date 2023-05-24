import { useState } from "react";
import styles from "./radio-package.module.css";
import { RadioPackageProps } from "@/models/radio-package";

export default function RadioPackage({
  description,
  details,
  name,
  price,
  selected,
  title,
  value,
  onChange,
}: RadioPackageProps) {
  return (
    <div className="w-100">
      <label className={`${selected ? styles.selected : ""} ${styles.label}`}>
        <div className="d-flex  gap-3 p-3 justify-content-between">
          <input
            name={name}
            onChange={(e) => onChange(e.target.value)}
            type="radio"
            value={value}
          />

          <div>
            <span className={styles.title}>{title}</span>
            <p className={styles.description}>{description}</p>
            <span className={styles.details}>{details}</span>
          </div>
          <div>
            <span className={styles.price}>${price}</span>
            <p className={styles.total}>total price</p>
          </div>
        </div>

        <div className="d-flex gap-4 justify-content-center">
          <button className="btn btn-outline-success btn-lg">
            Show photos
          </button>
          <button className="btn btn-outline-success btn-lg">
            Request to book
          </button>
        </div>
      </label>
    </div>
  );
}
