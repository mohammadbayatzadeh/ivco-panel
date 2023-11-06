"use client";
import React, { useState } from "react";
import styles from "./PasswordPage.module.css";
import Toast from "@/components/elements/Toast";
import axios from "axios";
import { BeatLoader } from "react-spinners";

function PasswordPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    confirm_new_password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

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
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data))
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className={styles.container}>
      <h2>Change Password</h2>
      <p>change your account password</p>

      <label>Current Password:</label>
      <input
        name="current_password"
        type="password"
        value={form.current_password}
        onChange={changeHandler}
      />

      <label>New Password:</label>
      <input
        name="new_password"
        type="password"
        value={form.new_password}
        onChange={changeHandler}
      />

      <label>Confirm New Password:</label>
      <input
        name="confirm_new_password"
        type="password"
        value={form.confirm_new_password}
        onChange={changeHandler}
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
