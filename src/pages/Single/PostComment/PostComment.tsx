import styles from "./PostComment.module.scss";

export function PostComment() {
  return (
    <div className={styles.form_comment}>
      <h1>Leave a reply</h1>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <div className={styles.form_control}>
        <input type="text" placeholder="Enter your name*" />
      </div>
      <div className={styles.form_control}>
        <input type="text" placeholder="Enter your name*" />
      </div>
      <div className={styles.form_control}>
        <input type="text" placeholder="Enter your name*" />
      </div>
      <div className={styles.form_control_checkbox}>
        <input type="checkbox" placeholder="Enter your name*" />
        <span>
          Save my name, email, and website in this browser for the next time I
          comment
        </span>
      </div>
      <div className={styles.form_control_textbox}>
        <label>Your Comment*</label>
        <textarea></textarea>
      </div>
      <button className={styles.button_dark}>POST COMMENT</button>
    </div>
  );
}
