import React, { useState } from "react";

//styles
import styles from "./Modal.module.css";

//icons
import { AiOutlineClose } from "react-icons/ai";
import CopyToClipboard from "react-copy-to-clipboard";
import { BiSolidCopy } from "react-icons/bi";

//components
import Toast from "@/components/elements/Toast";

function Modal({ title, header, options = [], inputs = [], details = true }) {
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
        <p>{header}</p>
        {options.length ? (
          <select>
            {options.map((item, index) => (
              <option value={`option${index}`} key={index}>
                {item}
              </option>
            ))}
          </select>
        ) : null}
        {inputs.map((item, index) => (
          <div className={styles.input} key={index}>
            <label>{item}:</label>
            <input name={item} type="text" />
          </div>
        ))}
        {details ? (
          <>
            <CopyToClipboard
              text={id}
              onCopy={() => Toast("id copied", "info")}
            >
              <div className={styles.id}>
                <BiSolidCopy />
                {id}
              </div>
            </CopyToClipboard>
            <div className={styles.warning}>
              You just need to transfer Tether
            </div>
          </>
        ) : null}
        <button>Send Order</button>
      </div>
    </>
  );
}

export default Modal;
