import { ButtonProps } from "@/models/button";
import styles from "./primary-button.module.css";

export default function PrimaryButton(props: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
}
