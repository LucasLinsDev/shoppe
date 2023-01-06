import styles from "./Comments.module.scss";
import { HiChevronDoubleLeft } from "react-icons/hi";
import avatar from "../../../assets/img/avatar/avatar.png";
import arrow from "../../../assets/img/icons/arrow.svg";
export function Comments() {
  return (
    <div className={styles.comment_container}>
      <h2>Comments(3)</h2>
      <div className={styles.comment}>
        <div className={styles.comment_item_question}>
          <div className={styles.comment_item_image}>
            <img src={avatar} />
          </div>
          <div className={styles.comment_content}>
            <div className={styles.comment_content_header}>
              <h2>Scarlet eitch </h2>
              <span>6 May, 2020</span>
              <span>
                <img src={arrow} />
                Replay
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet.{" "}
            </p>
          </div>
        </div>
        <div className={styles.comment_item_answer}>
          <div className={styles.comment_item_question}>
            <div className={styles.comment_item_image}>
              <img src={avatar} />
            </div>
            <div className={styles.comment_content}>
              <div className={styles.comment_content_header}>
                <h2>Scarlet eitch </h2>
                <span>6 May, 2020</span>
                <span>
                  <img src={arrow} />
                  Replay
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
