import React, { useState } from "react";

//styles
import styles from "./Modal.module.css";

//icons
import { AiOutlineClose } from "react-icons/ai";
import CopyToClipboard from "react-copy-to-clipboard";
import { BiSolidCopy } from "react-icons/bi";

function Modal({ title }) {
  const [modal, setModal] = useState(false);
  const id = "adfafe7c-9a4c-42e7-bf21-259b5222cc9b";

  return (
    <>
      <span className={styles.button} onClick={() => setModal(true)}>
        {title}
      </span>
      <div
        className={
          modal ? `${styles.layer} ${styles.layerActive}` : styles.layer
        }
      ></div>
      <div
        className={
          modal ? `${styles.modal} ${styles.modalActive}` : styles.modal
        }
      >
        <AiOutlineClose
          onClick={() => setModal(false)}
          className={styles.close}
        />
        <p>USA cue(Billiards)</p>
        <select>
          <option value="option1">3 month</option>
          <option value="option2">6 month</option>
          <option value="option3">9 month</option>
          <option value="option4">12 month</option>
          <option value="option5">36 month</option>
        </select>
        <div className={styles.input}>
          <label>Amount:</label>
          <input name="Amount" type="text" />
        </div>
        <div className={styles.input}>
          <label>Number:</label>
          <input name="number" type="text" />
        </div>
        <CopyToClipboard text={id} onCopy={() => Toast("id copied", "info")}>
          <div className={styles.id}>
            <BiSolidCopy />
            {id}
          </div>
        </CopyToClipboard>
        <div className={styles.warning}>You just need to transfer Tether</div>
        <button>Buy</button>
      </div>
    </>
  );
}

export default Modal;
