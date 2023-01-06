import styles from "./style.module.scss";

export function NotFound() {
  return (
    <div className={styles.error}>
      <h1>404 ERROR</h1>
      <p>
        This page not found; <br />
        back to home and start again
      </p>
      <button className={styles.button_white}>HOMEPAGE</button>
    </div>
  );
}
