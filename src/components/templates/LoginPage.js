"use client";
import React, { useState } from "react";
import styles from "./AuthPage.module.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import Toast from "../elements/Toast";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form);

    axios
      .post("/api/auth/signup", { body: form })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err.response);
        Toast(err.response.data.message , 'error')
      });
  };
  return (
    <div className={styles.body}>
      <ToastContainer />
      <form className={styles.form}>
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
        <button onClick={submitHandler}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
