import styles from "./Aside.module.scss";
import { Search } from "../../../components/Form/Search/Search";
import { Select } from "../../../components/Form/Select/Select";

export function Aside() {
  return (
    <aside className={styles.aside}>
      <Search />
      <div className={styles.select_box}>
        <Select /> <Select txt="Sort By" />
      </div>
    </aside>
  );
}
