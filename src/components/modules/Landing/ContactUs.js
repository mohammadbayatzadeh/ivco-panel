"use client";
import React, { useState } from "react";

//styles
import styles from "./ContactUs.module.css";

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
      <form className={styles.form}>
        <label>Name:</label>
        <input
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <label>Email:</label>
        <input
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <label>Subject:</label>
        <input
          name="subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />
        <label>Enquiry:</label>
        <textarea
          name="enquiry"
          value={form.enquiry}
          onChange={(e) => setForm({ ...form, enquiry: e.target.value })}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
