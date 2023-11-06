import React from "react";
import styles from "./InputBox.module.css";

function InputBox({ title, label, value }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.input}>
        <label>{label}:</label>
        <input name={label} type="text" />
      </div>
    </div>
  );
}

export default InputBox;
