import styles from "./Footer.module.scss";
import facebook from "../../assets/img/icons/Icon color-1.svg";
import { Newsteller } from "./Newsteller/Newsteller";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_row}>
          <div className={styles.footer_box_left}>
            <a>Contact</a>
            <a>Contact</a>
            <a>Contact</a>
          </div>
          <div className={styles.footer_box_right}>
            <Newsteller />
          </div>
        </div>
        <div className={styles.footer_row}>
          <div className={styles.footer_box_left}>
            © 2021 Shelly. Terms of use and privacy policy.
          </div>
          <div className={styles.footer_box_right}>
            <img src={facebook} />
            <img src={facebook} />
            <img src={facebook} />
            <img src={facebook} />
          </div>
        </div>
      </div>
    </footer>
  );
}
