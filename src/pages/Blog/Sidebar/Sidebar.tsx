import { Search } from "../../../components/Form/Search/Search";
import styles from "./Sidebar.module.scss";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Search />
      <h2>Categories</h2>
      <ul>
        <li>Fashion</li>
        <li>Style</li>
        <li>Accessories</li>
        <li>Season</li>
      </ul>
    </div>
  );
}
