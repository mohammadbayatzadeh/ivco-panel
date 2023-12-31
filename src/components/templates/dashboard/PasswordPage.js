"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

//styles
import styles from "./PasswordPage.module.css";

//components
import Toast from "@/components/elements/Toast";
import { BeatLoader } from "react-spinners";
import TextInput from "@/components/elements/Textinput";

function PasswordPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    confirm_new_password: "",
  });

  const submitHandler = async () => {
    if (
      !form.confirm_new_password ||
      !form.current_password ||
      !form.new_password
    ) {
      Toast("please enter all fields", "error");
      return;
    }
    if (form.confirm_new_password !== form.new_password) {
      Toast("passwords not match", "error");
      return;
    }
    setLoading(true);
    axios
      .post("/api/auth/change", { body: form })
      .then((res) => {
        router.push("/dashboard");
        Toast(res.data.message, "success");
      })
      .catch((err) => {
        Toast(err.response.data.message, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className={styles.container}>
      <h2>Change Password</h2>
      <p>change your account password</p>
      <TextInput
        form={form}
        setForm={setForm}
        type="password"
        name="current_password"
        label="Current password"
      />
      <TextInput
        form={form}
        setForm={setForm}
        type="password"
        name="new_password"
        label="New password"
      />
      <TextInput
        form={form}
        setForm={setForm}
        type="password"
        name="confirm_new_password"
        label="Confirm new password"
      />

      <button onClick={submitHandler}>
        {loading ? (
          <BeatLoader
            color="white"
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          "change"
        )}
      </button>
    </div>
  );
}

export default PasswordPage;
