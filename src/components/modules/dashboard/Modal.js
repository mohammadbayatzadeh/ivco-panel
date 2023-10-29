import React, { useState } from "react";

//styles
import styles from "./Modal.module.css";

function Modal({ title }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <span className={styles.button} onClick={() => setModal(true)}>
        {title}
      </span>
      <div
        className={
          modal ? `${styles.layer} ${styles.layerActive}` : styles.layer
        }
      >
        <div className={styles.modal}></div>
      </div>
    </>
  );
}

export default Modal;
