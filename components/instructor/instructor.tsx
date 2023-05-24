import { instructorProps } from "@/models/instructor";
import styles from "./instructor.module.css";
import Image from "next/image";

export default function Instructor({ name, picture }: instructorProps) {
  return (
    <div className="d-flex flex-column gap-1 w-100 align-items-center">
      <Image
        src={picture}
        alt={`instructor-${name}-image`}
        width={200}
        height={200}
        className={styles.image}
      />

      <p className={styles.name}>{name}</p>
    </div>
  );
}
