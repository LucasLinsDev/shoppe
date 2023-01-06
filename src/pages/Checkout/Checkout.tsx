import styles from "./Checkout.module.scss";
export function Checkout() {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout_container}>
        <div className={styles.checkout_cupom}>
          <p>Returning customer? Click here to login</p>
          <p>Have a coupon? Click here to enter your code</p>
          <div className={styles.checkout_box}>
            <p>If you have a coupon code, please apply it below.</p>
            <div className={styles.checkout_input}>
              <input type="text" placeholder="Coupon Code" />
              <button className={styles.button_dark}>APPLY COUPON</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.checkout_container}>
        {" "}
        <div className={styles.checkout_left}>
          <h1>Billing Details</h1>
          <div className={styles.form_row}>
            <div className={styles.form_control}>
              <input type="text" placeholder="First name *" />
            </div>
            <div className={styles.form_control}>
              <input type="text" placeholder="First name *" />
            </div>
          </div>
          <div className={styles.form_row}>
            <select>
              <option>Country *</option>
              <option>Country *</option>
              <option>Country *</option>
              <option>Country *</option>
              <option>Country *</option>
              <option>Country *</option>
            </select>
          </div>
          <div className={styles.form_control}>
            <input type="text" placeholder="First name *" />
          </div>
          <div className={styles.form_control}>
            <input type="text" placeholder="First name *" />
          </div>
          <div className={styles.form_control}>
            <input type="text" placeholder="First name *" />
          </div>
          <div className={styles.form_control}>
            <input type="text" placeholder="First name *" />
          </div>
          <div className={styles.form_control}>
            <input type="text" placeholder="First name *" />
          </div>
          <div className={styles.form_control}>
            <input type="text" placeholder="First name *" />
          </div>
          <div className={styles.form_control_checkout}>
            <input type="checkbox" placeholder="First name *" />
            <span>Create an acoount?</span>
          </div>
          <div className={styles.form_control_checkout}>
            <input type="checkbox" placeholder="First name *" />
            <span>Ship to a different address?</span>
          </div>
          <div className={styles.form_control}>
            <input type="text" placeholder="First name *" />
          </div>
        </div>
        <div className={styles.checkout_right}>
          <h2>Your Order</h2>
          <div className={styles.checkout_product}>
            <div className={styles.checkout_product_header}>
              <p>PRODUCT</p>
              <p>total</p>
            </div>
            <div className={styles.checkout_product_row}>
              <p>PRODUCT</p>
              <p>total</p>
            </div>
            <div className={styles.checkout_product_row}>
              <p>PRODUCT</p>
              <p>total</p>
            </div>
            <div className={styles.checkout_product_row}>
              <p>PRODUCT</p>
              <p>total</p>
            </div>
            <div className={styles.checkout_product_bottom}>
              <p>PRODUCT</p>
              <p>total</p>
            </div>
            <div className={styles.checkout_product_bottom}>
              <p>PRODUCT</p>
              <p>total</p>
            </div>
            <div className={styles.checkout_product_bottom}>
              <p>PRODUCT</p>
              <p>total</p>
            </div>
            <div className={styles.checkout_input_radio}>
              <input type="radio" />
              <span>Direct bank transfer</span>
            </div>
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account
            </p>
            <div className={styles.checkout_input_radio}>
              <input type="radio" />
              <span>Direct bank transfer</span>
            </div>

            <div className={styles.checkout_input_radio}>
              <input type="radio" />
              <span>Direct bank transfer</span>
            </div>
            <div className={styles.checkout_input_radio}>
              <input type="radio" />
              <span>Direct bank transfer</span>
            </div>
            <button className={styles.checkout_button}>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
