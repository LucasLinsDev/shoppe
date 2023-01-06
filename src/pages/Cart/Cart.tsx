import { useState } from "react";
import styles from "./Cart.module.scss";
import image from "../../assets/img/products/product-01.png";
import { BiCaretDown, BiXCircle } from "react-icons/bi";
export function Cart() {
  const [dropContent, setDropContent] = useState(false);
  return (
    <div className={styles.page_cart}>
      <h1> Shopping Cart</h1>
      <div className={styles.cart_container}>
        <div className={styles.cart_products}>
          {[1, 2, 3].map(() => (
            <div className={styles.cart_product_item}>
              <img src={image} alt="" />
              <div className={styles.product_content}>
                <h2>Lira Earrings</h2>
                <p>Black / Medium</p>
                <p> $ 20.00</p>
              </div>
              <div className={styles.quantity}>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div className={styles.button_remove}>
                <BiXCircle size={24} />
              </div>
            </div>
          ))}
          <div className={styles.update_cart}>
            <button className={styles.button_white}>UPDATE CART</button>
          </div>
          <div className={styles.add_coupom}>
            <input
              type="text"
              className={styles.input_cart}
              placeholder="Coupom Code"
            />
            <button className={styles.button_dark}>Apply Coupon</button>
          </div>
        </div>
        <div className={styles.cart_total}>
          <h2>Card Totals</h2>
          <div className={styles.total_container}>
            <div className={styles.row_total}>
              <h3>Subtotal</h3>
              <p>$ 65,00</p>
            </div>
            <div className={styles.row_total}>
              <h3>Subtotal</h3>
              <p>$ 65,00</p>
            </div>
            <div className={styles.form_total}>
              {[1, 2, 3].map(() => (
                <div className={styles.drop}>
                  <div className={styles.drop_header}>
                    <h3>CALCULATE SHIPPING</h3> <BiCaretDown size={20} />
                  </div>

                  {dropContent ? (
                    <div className={styles.drop_content}>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eius a possimus sdoloribus rem eaque ut nisi,
                        odio, dolorem, totam sunt fugiat omnis hic perferendis
                        alias est nostrum corporis molestiae et.
                      </p>
                    </div>
                  ) : null}
                </div>
              ))}
              <button className={styles.form_total_button}>
                UPDATE TOTALS
              </button>
            </div>
          </div>
          <div className={styles.row}>
            <p>TOTAL</p>
            <p>$ 87.00</p>
          </div>
          <button className={styles.button_dark_large}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
