import React from "react";
import { Grid } from "../../components/Grid/Grid";
import { Header } from "../../components/Header/Header";
import { Hero } from "./Hero/Hero";
import styles from "./Home.module.scss";
import { CardProduct } from "../../components/Card/CardProduct";
import { Footer } from "../../components/Footer/Footer";
export function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <div className={styles.home_section_title}>
        <h1 className="title">Shop The Latest</h1>{" "}
        <p className="link_header">View all</p>
      </div>
      <Grid>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Grid>
      <Footer />
    </React.Fragment>
  );
}
