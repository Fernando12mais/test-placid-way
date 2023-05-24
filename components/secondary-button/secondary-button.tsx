import { ButtonProps } from "@/models/button";
import styles from "./secondary-button.module.css";

export default function SecondaryButton(props: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
}
