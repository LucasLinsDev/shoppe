import { BiCloset } from "react-icons/bi";
import styles from "./Bag.module.scss";
import product from "../../assets/img/products/product-01.png";
export function Bag() {
  return (
    <div className={styles.bag_container}>
      <div className={styles.bag_header}>
        <h1>Shopping bag</h1>
        <p>5 items</p>
      </div>
      {[1, 2, 3, 4].map(() => (
        <div className={styles.bag_product}>
          <div>
            <img src={product} alt="" />
          </div>
          <div className={styles.product_content}>
            <h2>Lira Earrings</h2>
            <p>Black / Medium</p>
            <p>$ 20,00</p>
            <div className={styles.quantity}>
              <span>QTY: </span>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
            <BiCloset />
          </div>
        </div>
      ))}
    </div>
  );
}
