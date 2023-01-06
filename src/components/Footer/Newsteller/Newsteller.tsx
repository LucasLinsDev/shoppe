import styles from "./Newsteller.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
export function Newsteller() {
  return (
    <div className={styles.newsteller_container}>
      <input type="text" placeholder="Give an email, get the newsletter." />
      <HiOutlineArrowNarrowRight />
    </div>
  );
}
