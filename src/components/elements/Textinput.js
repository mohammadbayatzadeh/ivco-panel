import React from "react";

//styles
import styles from "./TextInput.module.css";

function TextInput({
  form,
  setForm,
  name,
  label,
  type,
  textarea = false,
  placeholder = false,
}) {
  const styleTypes = {
    contact: "contactInput",
    auth: "authInput",
    dashboard: "dashInput",
    ticket: "ticketInput",
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className={styles[styleTypes[type]]} style={{ width: "100%" }}>
      {!placeholder && <label>{label}:</label>}
      {textarea ? (
        <textarea
          name={name}
          value={form[name]}
          onChange={changeHandler}
          type={name}
          placeholder={placeholder && label}
        />
      ) : (
        <input
          name={name}
          value={form[name]}
          onChange={changeHandler}
          type={name}
        />
      )}
    </div>
  );
}

export default TextInput;
