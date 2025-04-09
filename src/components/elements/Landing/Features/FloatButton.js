//styles
import Link from "next/link";
import styles from "./FloatButton.module.css";

//icons
import { FaAutoprefixer } from "react-icons/fa";

function FloatButton({ show }) {
  return (
    <Link
      className={
        show ? `${styles.container} ${styles.active}` : styles.container
      }
      to="/#"
    >
      <FaAutoprefixer />
    </Link>
  );
}

export default FloatButton;
