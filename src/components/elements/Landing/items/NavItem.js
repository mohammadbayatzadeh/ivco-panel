//styles
import styles from "./NavItem.module.css";

function NavItem({ title, href, setShow }) {
  return (
    <li className={styles.item} onClick={() => setShow(false)}>
      <a href={`#${href}`}>{title}</a>
    </li>
  );
}

export default NavItem;
