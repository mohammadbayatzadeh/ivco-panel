"use client";
import React, { useState } from "react";
import styles from "./AuthPage.module.css";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [fill, setFill] = useState({ email: false, password: false });
  const changeHandler = (e) => {
    const { value, name } = e.target;
    if (value) {
      setFill({ ...fill, [name]: true });
    } else {
      setFill({ ...fill, [name]: false });
    }

    setForm({ ...form, [name]: value });
  };
  return (
    <div className={styles.body}>
      <div className={styles.form}>
        <h3>Login Form</h3>
        <p>Please sign-in to your account</p>
        <label>Email:</label>
        <input
          value={form.email}
          onChange={changeHandler}
          name="email"
          type="email"
        />
        <label>Password:</label>
        <input
          value={form.password}
          onChange={changeHandler}
          name="password"
          type="password"
        />
      </div>
    </div>
  );
}

export default LoginPage;
