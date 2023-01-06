import styles from "./Grid.module.scss";
import { ReactNode } from "react";
interface GridProps {
  children: ReactNode;
}

export function Grid({ children }: GridProps) {
  return <div className={styles.grid}>{children}</div>;
}
