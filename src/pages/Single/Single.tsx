import styles from "./Single.module.scss";
import facebook from "../../assets/img/heroicons/facebook.svg";
import hero from "../../assets/img/blog/single-hero.png";
import { PostComment } from "./PostComment/PostComment";
import { Comments } from "./Comments/Comments";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import React from "react";
export function Single() {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.single}>
        <div className={styles.single_header}>
          <h1>Fast Fashion, And Faster Fashion</h1>
          <p>
            by <span> ANNY JOHNSON</span> - October 8,2020
          </p>
        </div>
        <article>
          <div className={styles.single_image}>
            <img src={hero} />
          </div>
          <div className={styles.single_content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis. Nunc sed porta augue.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis. Nunc sed porta augue.
            </p>
            <img src={hero} />

            <h2>Top trends</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero.
            </p>
            <ul>
              <li>consectetur adipiscing elit. Aliquam placerat</li>
              <li>Lorem ipsum dolor sit amet consectetur </li>
              <li>sapien tortor faucibus augue</li>
              <li>
                a maximus elit ex vitae libero. Sed quis mauris eget arcu
                facilisis
              </li>
            </ul>
            <div className={styles.tags_and_social_share}>
              <div className={styles.box_left}>
                <p>Tags </p>
                <div className={styles.line}></div>{" "}
                <p>Fashion, Style, Season</p>
              </div>
              <div className={styles.box_right}>
                <p>Share</p> <div className={styles.line}></div>
                <img src={facebook} />
                <img src={facebook} />
                <img src={facebook} />
              </div>
            </div>
          </div>
          <PostComment />
          <Comments />
        </article>
      </div>
      <Footer />
    </React.Fragment>
  );
}
