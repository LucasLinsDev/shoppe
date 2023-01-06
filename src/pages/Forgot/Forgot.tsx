import styles from "./Forgot.module.scss";
import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
export function Forgot() {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.login_container}>
        <h1>Have you Forgotten Your Password ?</h1>
        <p>
          If you've forgotten your password, enter your e-mail address and we'll
          send you an e-mail{" "}
        </p>
        <div className={styles.form_container}>
          <div className={styles.form_box}>
            <input type="text" placeholder="Email" />
          </div>

          <button className={styles.button_dark}>SIGN IN</button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
