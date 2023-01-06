import styles from "./Select.module.scss";

interface SelectProps {
  txt?: string;
}

export function Select({ txt = "Shop By" }: SelectProps) {
  return (
    <select className={styles.select}>
      <option>{txt}</option>
    </select>
  );
}
