"use client";
import { useState } from "react";
import styles from "./NewTicketPage.module.css";

function NewTicketPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className={styles.container}>
      <h2>Tickets</h2>
      <p>Create new ticket</p>
      <form className={styles.form} onSubmit={submitHandler}>
        <label>Title</label>
        <input
          type="text"
          value={form.title}
          onChange={changeHandler}
          name="title"
        />
        <textarea
          placeholder="Enter the text here"
          value={form.description}
          onChange={changeHandler}
          name="description"
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewTicketPage;
