import styles from "./MenuIcons.module.scss";
import { HiMagnifyingGlass } from "react-icons/hi2";
export function MenuIcons() {
  return (
    <div className={styles.menu_icons}>
      <div className={styles.icon_box}>
        <HiMagnifyingGlass size={20} />
      </div>

    </div>
  );
}
