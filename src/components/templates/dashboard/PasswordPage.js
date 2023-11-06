"use client";
import React, { useState } from "react";
import styles from "./PasswordPage.module.css";
import Toast from "@/components/elements/Toast";

function PasswordPage() {
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
    }
    console.log(form);
  };
  return (
    <div className={styles.container}>
      <h2>Change Password</h2>
      <p>change your account password</p>

      <label>Current Password:</label>
      <input
        name="current_password"
        type="text"
        value={form.current_password}
        onChange={changeHandler}
      />

      <label>New Password:</label>
      <input
        name="new_password"
        type="text"
        value={form.new_password}
        onChange={changeHandler}
      />

      <label>Confirm New Password:</label>
      <input
        name="confirm_new_password"
        type="text"
        value={form.confirm_new_password}
        onChange={changeHandler}
      />
      <button onClick={submitHandler}>submit</button>
    </div>
  );
}

export default PasswordPage;
