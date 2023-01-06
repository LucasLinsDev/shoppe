import styles from "./Login.module.scss";
import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
export function Login() {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.login_container}>
        <h1>My Account</h1>
        <div className={styles.login_switch}>
          <div className={styles.login_switch_button}>Sign In</div>
          <div className={styles.login_switch_button_off}>Register </div>
        </div>
        <div className={styles.form_container}>
          <div className={styles.form_box}>
            <input type="text" placeholder="Email" />
          </div>
          <div className={styles.form_box}>
            <input type="text" placeholder="Password" />
          </div>
          <div className={styles.form_checkout}>
            <input type="checkbox" /> <span>Remember me</span>
          </div>
          <button className={styles.button_dark}>SIGN IN</button>
          <div className={styles.remember}>
            Have you forgotten your password?
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
