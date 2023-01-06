import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import styles from "./Contact.module.scss";

export function Contact() {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.container}>
        <div className={styles.container_header}>
          <h1>Contact Us</h1>
          <p>
            Say Hello send us your thoughts about our products or share your
            ideas with our Team!
          </p>
        </div>
        <div className={styles.contact_form}>
          <div className={styles.form_row}>
            <div className={styles.input_box}>
              <input type="text" placeholder="First name" />
            </div>
            <div className={styles.input_box}>
              <input type="text" placeholder="First name" />
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={styles.input_box}>
              <input type="text" placeholder="First name" />
            </div>
            <div className={styles.input_box}>
              <input type="text" placeholder="First name" />
            </div>
          </div>
          <div className={styles.form_text}>
            <h2>Message</h2>
            <textarea></textarea>
          </div>
          <div className={styles.button_content}>
            <button className={styles.button_dark}>SEND</button>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
