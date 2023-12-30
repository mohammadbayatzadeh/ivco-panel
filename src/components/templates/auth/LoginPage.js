"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

//styles
import styles from "./AuthPage.module.css";

//icons
import { BiHomeSmile } from "react-icons/bi";

//elements
import BeatLoader from "react-spinners/BeatLoader";
import TextInput from "@/components/elements/Textinput";
import Toast from "../../elements/Toast";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      ...form,
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
      <form className={styles.form} onSubmit={submitHandler}>
        <h3>Login Form</h3>
        <p>Please sign-in to your account</p>
        <TextInput
          form={form}
          setForm={setForm}
          name="email"
          label="Email"
          type="auth"
        />
        <TextInput
          form={form}
          setForm={setForm}
          name="password"
          label="Password"
          type="auth"
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
