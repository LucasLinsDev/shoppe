import styles from "./Search.module.scss";

import { BiSearch } from "react-icons/bi";

export function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search..." />
      <BiSearch size={19} color="#000000" />
    </div>
  );
}
