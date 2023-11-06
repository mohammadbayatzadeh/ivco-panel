"use client";
import React, { useState } from "react";
import styles from "./InputBox.module.css";

function InputBox({ title, label, value }) {
  const [val, setVal] = useState(value);
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.input}>
        <label>{label}:</label>
        <input
          name={label}
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button>submit</button>
      </div>
    </div>
  );
}

export default InputBox;
