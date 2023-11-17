"use client";
import React, { useState } from "react";
import Toast from "../../elements/Toast";
import Link from "next/link";
import { signIn } from "next-auth/react";
import BeatLoader from "react-spinners/BeatLoader";
import { useRouter } from "next/navigation";

//styles
import styles from "./AuthPage.module.css";

//icons
import { BiHomeSmile } from "react-icons/bi";

function LoginPage() {
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
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (res.error) {
      setLoading(false);
      Toast(res.error, "error");
    } else {
      Toast("welcome back", "success");
      router.push("/dashboard");
    }
  };
  return (
    <div className={styles.body}>
      <Link href="/" className={styles.home}>
        <BiHomeSmile />
      </Link>
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
            "Login"
          )}
        </button>
      </form>
      <p>not have account?</p>
      <Link href="/signup">Register</Link>
    </div>
  );
}

export default LoginPage;
