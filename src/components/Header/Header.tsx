import styles from "./Header.module.scss";
import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";
import { MenuIcons } from "./MenuIcons/MenuIcons";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Logo />
        <Menu />
        <MenuIcons />
      </div>
    </header>
  );
}
