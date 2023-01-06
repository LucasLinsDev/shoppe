import styles from "./Hero.module.scss";
import hero from "../../../assets/img/hero/hero-01.png";
export function Hero() {
  return (
    <div className={styles.hero}>
      <div
        className={styles.hero_content}
        style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover" }}
      >
        <h1>Gold big hoops</h1>
        <p>$ 68,00</p>
        <button>View Product</button>
      </div>
    </div>
  );
}
