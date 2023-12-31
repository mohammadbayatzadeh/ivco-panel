import React from "react";

//styles
import styles from "./TextInput.module.css";

function TextInput({
  form,
  setForm,
  name,
  label,
  type = "dashboard",
  textarea = false,
  placeholder = false,
}) {
  const styleTypes = {
    contact: "contactInput",
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
          placeholder={placeholder ? label : null}
        />
      ) : (
        <input
          name={name}
          value={form[name]}
          onChange={changeHandler}
          type={name.includes("password") ? "password" : name}
        />
      )}
    </div>
  );
}

export default TextInput;
