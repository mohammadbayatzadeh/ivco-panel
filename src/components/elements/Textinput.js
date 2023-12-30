import React from "react";
import styles from "./TextInput.module.css";

function TextInput({ form, setForm, name, label, type }) {
  const styleTypes = {
    contact: "contactInput",
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <>
      <label>{label}:</label>
      <input name={name} value={form[name]} onChange={changeHandler} />
    </>
  );
}

export default TextInput;
