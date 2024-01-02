"use client";
import { useState } from "react";

//styles
import styles from "./NewTicketPage.module.css";

//elements
import TextInput from "@/components/elements/Textinput";

function NewTicketPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h2>Tickets</h2>
      <p>Create new ticket</p>
      <form className={styles.form} onSubmit={submitHandler}>
        <TextInput
          form={form}
          setForm={setForm}
          name="title"
          label="Title"
          type="ticket"
        />
        <TextInput
          form={form}
          setForm={setForm}
          type="ticket"
          name="description"
          label="Please enter your text here"
          textarea={true}
          placeholder={true}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewTicketPage;
