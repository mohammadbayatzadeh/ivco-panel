//styles
import styles from "./FloatButton.module.css";

//icons
import { FaAutoprefixer } from "react-icons/fa";

function FloatButton({ show }) {
  return (
    <a
      className={
        show ? `${styles.container} ${styles.active}` : styles.container
      }
      href="/#"
    >
      <FaAutoprefixer />
    </a>
  );
}

export default FloatButton;
