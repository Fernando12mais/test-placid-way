import LogoIcon from "@/public/icons/logo-icon";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="content-wrapper">
        <div className="d-flex align-items-center justify-content-center gap-3">
          <LogoIcon className={styles.icon} />

          <address className="m-0">Copyright © 2023 Fernando Fernandes</address>
        </div>
      </div>
    </footer>
  );
}
