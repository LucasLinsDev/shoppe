import styles from "./CardProduct.module.scss";
import produto from "../../assets/img/products/product-01.png";
export function CardProduct() {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card_image}>
        <img src={produto} alt="" />
      </div>
      <h2>Lira Earrings</h2>
      <p>$ 20,00</p>
    </div>
  );
}
