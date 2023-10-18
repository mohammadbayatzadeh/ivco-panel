"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BeatLoader from "react-spinners/BeatLoader";

//styles
import styles from "./AuthPage.module.css";

//components
import Toast from "../elements/Toast";

//icons
import { BiHomeSmile } from "react-icons/bi";

function RegisterPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/auth/signup", { body: form })
      .then((res) => {
        router.push("/login");
        Toast(res.data.message, "success");
      })
      .catch((err) => {
        Toast(err.response.data.message, "error");
        setLoading(false);
      });
  };

  return (
    <div className={styles.body}>
      <Link href="/" className={styles.home}>
        <BiHomeSmile />
      </Link>
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
        <button onClick={submitHandler}>
          {loading ? (
            <BeatLoader
              color="white"
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "Register"
          )}
        </button>
      </form>
      <p> have account?</p>
      <Link href="/login">Login</Link>
    </div>
  );
}

export default RegisterPage;
