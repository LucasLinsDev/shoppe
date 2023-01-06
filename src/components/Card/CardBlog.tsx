import styles from "./CardBlog.module.scss";
import blog from "../../assets/img/blog/blog.png";
export function CardBlog() {
  return (
    <div className={styles.card_blog}>
      <div className={styles.card_blog_image}>
        <img src={blog} alt="" />
      </div>
      <div className={styles.card_blog_content}>
        <span>Fashion - October 8, 2020</span>
        <h1>Top Trends From Spring</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
          augue, a maximus elit ex vitae libero...
        </p>
        <a>Read More</a>
      </div>
    </div>
  );
}
