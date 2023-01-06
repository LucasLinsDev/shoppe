import { CardBlog } from "../../components/Card/CardBlog";
import styles from "./Blog.module.scss";
import { Sidebar } from "./Sidebar/Sidebar";
import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
export function Blog() {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.blog}>
        <div className={styles.blog_header}>
          <h1>Blog</h1>
        </div>
        <div className={styles.blog_container}>
          <div className={styles.blog_left}>
            <Sidebar />
          </div>
          <div className={styles.blog_content}>
            <div className={styles.blog_grid}>
              <CardBlog />
              <CardBlog />
              <CardBlog />
              <CardBlog />
            </div>
            <div className={styles.blog_pagination}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
