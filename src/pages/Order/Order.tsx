import styles from "./Order.module.scss";
export function Order() {
  return (
    <div className={styles.order}>
      <div className={styles.order_left}>
        <h1>Order Details</h1>
        <div className={styles.order_row}>
          <div className={styles.box}>
            <h2>ORDER NUMBER</h2>
            <p>1879605573994</p>
          </div>
          <div className={styles.box}>
            <h2>ORDER NUMBER</h2>
            <p>1879605573994</p>
          </div>
        </div>
        <div className={styles.order_row}>
          <div className={styles.box}>
            <h2>ORDER NUMBER</h2>
            <p>1879605573994</p>
          </div>
          <div className={styles.box}>
            <h2>ORDER NUMBER</h2>
            <p>1879605573994</p>
          </div>
        </div>
        <div className={styles.order_row}>
          <div className={styles.box}>
            <h2>ORDER NUMBER</h2>
            <p>1879605573994</p>
          </div>
          <div className={styles.box}>
            <h2>ORDER NUMBER</h2>
            <p>1879605573994</p>
          </div>
        </div>
      </div>
      <div className={styles.order_right}>
        <h1>Order Summary</h1>
        <div className={styles.order_box_info}>
          <div className={styles.order_info_header}>
            <p>PRODUCT</p>
            <p>TOTAL</p>
          </div>
          <div className={styles.order_item_row}>
            <p>Lira Earrings</p>
            <p>$64</p>
          </div>
          <div className={styles.order_item_row}>
            <p>Lira Earrings</p>
            <p>$64</p>
          </div>
          <div className={styles.order_item_row}>
            <p>Lira Earrings</p>
            <p>$64</p>
          </div>
          <div className={styles.order_item_footer}>
            <p>Lira Earrings</p>
            <p>$64</p>
          </div>
          <div className={styles.order_item_footer}>
            <p>Lira Earrings</p>
            <p>$64</p>
          </div>
          <div className={styles.order_item_footer}>
            <p>Lira Earrings</p>
            <p>$64</p>
          </div>
        </div>
      </div>
    </div>
  );
}
