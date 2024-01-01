"use client";
import React, { useState } from "react";

//styles
import styles from "./InputBox.module.css";

//elements
import TextInput from "../Textinput";

function InputBox({ title, label, value }) {
  const [form, setForm] = useState({
    [label]: value,
  });
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.input}>
        <TextInput form={form} setForm={setForm} name={label} label={label} />
        <button>submit</button>
      </div>
    </div>
  );
}

export default InputBox;
