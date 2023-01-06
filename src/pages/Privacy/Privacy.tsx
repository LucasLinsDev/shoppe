import styles from "./Privacy.module.scss";
import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
export function Privacy() {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.privacy}>
        <h1>Privacy Policy</h1>
        <p>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.{" "}
        </p>
        <h2>Security</h2>
        <p>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque.
        </p>
        <h2>Cookies</h2>
        <ul>
          <li>
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
            sollicitudin.
          </li>
          <li>
            Nam fringilla molestie velit, eget pellentesque risus scelerisque a
          </li>
        </ul>
      </div>
      <Footer />
    </React.Fragment>
  );
}
