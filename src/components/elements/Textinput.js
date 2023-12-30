import React from "react";
import styles from "./TextInput.module.css";

function TextInput({ form, setForm, name, label, type, textarea = false }) {
  const styleTypes = {
    contact: "contactInput",
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className={styles[styleTypes[type]]} style={{ width: "100%" }}>
      <label>{label}:</label>
      {textarea ? (
        <textarea name={name} value={form[name]} onChange={changeHandler} />
      ) : (
        <input name={name} value={form[name]} onChange={changeHandler} />
      )}
    </div>
  );
}

export default TextInput;
