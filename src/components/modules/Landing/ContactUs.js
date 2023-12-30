"use client";
import React, { useState } from "react";

//styles
import styles from "./ContactUs.module.css";

//elements
import TextInput from "@/components/elements/Textinput";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    enquiry: "",
  });
  return (
    <div className={styles.container} id="contact">
      <h4>Contact Us</h4>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <TextInput form={form} setForm={setForm} name="name" label="Name" />
        <TextInput form={form} setForm={setForm} name="email" label="Email" />
        <TextInput
          form={form}
          setForm={setForm}
          name="subject"
          label="Subject"
        />
        <TextInput
          form={form}
          setForm={setForm}
          name="enquiry"
          label="Enquiry"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
