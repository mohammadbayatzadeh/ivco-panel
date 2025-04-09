import { FaAutoprefixer } from "react-icons/fa";
import styles from "./FloatButton.module.css";

function FloatButton({ show }) {
  return (
    <a
      className={
        show ? `${styles.container} ${styles.active}` : styles.container
      }
      to="/#"
    >
      <FaAutoprefixer />
    </a>
  );
}

export default FloatButton;
