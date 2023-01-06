import React from "react";
import { CardProduct } from "../../components/Card/CardProduct";
import { Footer } from "../../components/Footer/Footer";
import { Grid } from "../../components/Grid/Grid";
import { Header } from "../../components/Header/Header";
import { Aside } from "./Aside/Aside";
import { MenuMobile } from "./MenuMobile/MenuMobile";

import styles from "./Shop.module.scss";

export function Shop() {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.shop}>
        <div className={styles.shop_header}>
          <h1 className="title">Shop The Latest</h1>
        </div>
        <MenuMobile />
        <div className={styles.shop_container}>
          <Aside />
          <Grid>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <CardProduct key={index} />
            ))}
          </Grid>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
