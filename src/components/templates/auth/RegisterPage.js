"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

//styles
import styles from "./AuthPage.module.css";

//components
import BeatLoader from "react-spinners/BeatLoader";
import TextInput from "@/components/elements/Textinput";
import Toast from "../../elements/Toast";

//icons
import { BiHomeSmile } from "react-icons/bi";
import Background from "@/components/layouts/auth/Background";

function RegisterPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
    <Background>
      <Link href="/" className={styles.home}>
        <BiHomeSmile />
      </Link>
      <form className={styles.form} onSubmit={submitHandler}>
        <h3>Register Form</h3>
        <p>Make your app management easy and fun!</p>
        <TextInput form={form} setForm={setForm} name="email" label="Email" />
        <TextInput
          form={form}
          setForm={setForm}
          name="password"
          label="Password"
        />
        <button type="submit">
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
        <p> have account?</p>
        <Link href="/login">Login</Link>
      </form>
    </Background>
  );
}

export default RegisterPage;
