import styles from "./Product.module.scss";
import { BiStar, BiPlus, BiMinus } from "react-icons/bi";
import product from "../../assets/img/products/product-01.png";
import hearth from "../../assets/img/icons/coracao.svg";
import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Description } from "./Description/Description";
import { Grid } from "../../components/Grid/Grid";
import { CardProduct } from "../../components/Card/CardProduct";
export function Product() {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.product_container}>
        <div className={styles.product_row}>
          <div className={styles.product_galery}>
            <div className={styles.product_images}>
              <img src={product} alt="" />
              <img src={product} alt="" />
              <img src={product} alt="" />
              <img src={product} alt="" />
            </div>
            <div className={styles.product_image}>
              <img src={product} alt="" />
            </div>
          </div>
          <div className={styles.product_information}>
            <h1>Lira Earrings</h1>
            <p>$ 20.00</p>
            <div className={styles.product_star}>
              {[1, 2, 3, 4, 5].map((index) => (
                <BiStar size={18} color="black" />
              ))}
              <span>1 customer review</span>
            </div>
            <div className={styles.product_excerpt}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                placerat, augue a volutpat hendrerit, sapien tortor faucibus
                augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis consequat sed eu felis.
              </p>
            </div>
            <div className={styles.product_add}>
              <div className={styles.box_add}>
                <BiMinus />
                <span>1</span> <BiPlus />
              </div>
              <button className={styles.add_to_card}>ADD TO CART</button>
            </div>
            <div className={styles.product_social}>
              <div className={styles.hearth}>
                <img src={hearth} />
              </div>
              <div className={styles.social}>
                <img src={hearth} />
                <img src={hearth} />
                <img src={hearth} />
                <img src={hearth} />
                <img src={hearth} />
              </div>
            </div>
            <div className={styles.product_sku}>
              <span>SKU:</span> <span>12</span>
            </div>
            <div className={styles.product_categories}>
              <span>Categories: </span> <span>Fashion, Style</span>
            </div>
          </div>
        </div>
      </div>
      <Description />
      <div className={styles.product_header}>
        <h1 className="title">Similar Items</h1>
        <a href="#" className="link_header">
          View all
        </a>
      </div>
      <Grid>
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Grid>
      <Footer />
    </React.Fragment>
  );
}
