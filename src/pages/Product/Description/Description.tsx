import styles from "./Description.module.scss";
import { BiStar } from "react-icons/bi";
export function Description() {
  return (
    <div className={styles.description_container}>
      <div className={styles.description_item}>
        <div className={styles.description_button}>Description</div>
      </div>
      <div className={styles.description_content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
          in molestie diam bibendum sed.
        </p>
      </div>
      <div className={styles.description_aditional}>
        <div>
          <span>Weight: </span> <span>0.3kg</span>
        </div>
        <div>
          <span>Dimentions: </span> <span>15 x 10 x 1 cm</span>
        </div>
        <div>
          <span>Colours: </span> <span>Black, Browns, White</span>
        </div>
      </div>
      <div className={styles.description_review}>
        <div className={styles.reviews_list}>
          <div className={styles.review}>
            <h2>2 Reviews for lira earings</h2>
            <div className={styles.review_item}>
              <h2>Scarlet withch</h2>
              <span>6 May, 2020</span>
            </div>
            <div className={styles.review_star}>
              {[1, 2, 3, 4, 5].map(() => (
                <span className={styles.star_item}>
                  <BiStar size={20} />
                </span>
              ))}
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam placerat.
            </p>
          </div>
          <div className={styles.review}>
            <h2>2 Reviews for lira earings</h2>
            <div className={styles.review_item}>
              <h2>Scarlet withch</h2>
              <span>6 May, 2020</span>
            </div>
            <div className={styles.review_star}>
              {[1, 2, 3, 4, 5].map(() => (
                <span className={styles.star_item}>
                  <BiStar size={20} />
                </span>
              ))}
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam placerat.
            </p>
          </div>
        </div>
        <div className={styles.form_reviews}>
          <h2>Add a Review</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className={styles.form_textarea}>
            <label>Your Reviews*</label>
            <textarea></textarea>
          </div>
          <div className={styles.form_input}>
            <input type="text" placeholder="Enter your name*" />
          </div>
          <div className={styles.form_input}>
            <input type="text" placeholder="Enter your name*" />
          </div>
          <div className={styles.form_checkbox}>
            <input type="checkbox" />
            <span>
              Save my name, email, and website in this browser for the next time
              I comment
            </span>
          </div>
          <div className={styles.form_stars}>
            <p>Your Rating*</p>
            <div className={styles.form_start_container}>
              {[1, 2, 3, 4, 5, 6].map(() => (
                <BiStar size={24} />
              ))}
            </div>
            <button className={styles.form_button}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
