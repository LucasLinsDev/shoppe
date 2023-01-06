import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <Link to="/shop">Shop</Link>
      <Link to="/blog">Blog</Link>

      <Link to="/shop">Our Story</Link>
      <Link to="/contact">Contact</Link>
 
    </nav>
  );
}
