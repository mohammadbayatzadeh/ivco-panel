"use client";
import React, { useState } from "react";
import styles from "./AuthPage.module.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import Toast from "../elements/Toast";
import { BiHomeSmile } from "react-icons/bi";

function RegisterPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    axios
      .post("/api/auth/signup", { body: form })
      .then((res) => {
        Toast(res.data.message, "success");
      })
      .catch((err) => {
        Toast(err.response.data.message, "error");
      });
  };

  return (
    <div className={styles.body}>
      <Link href="/" className={styles.home}>
        <BiHomeSmile />
      </Link>
      <ToastContainer />
      <form className={styles.form}>
        <h3>Register Form</h3>
        <p>Make your app management easy and fun!</p>
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
        <button onClick={submitHandler}>Register</button>
      </form>
      <p> have account?</p>
      <Link href="/login">Login</Link>
    </div>
  );
}

export default RegisterPage;
