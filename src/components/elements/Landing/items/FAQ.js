import React from "react";

//styles
import styles from "./FAQ.module.css";

function FAQ({ count }) {
  let text = "";

  for (let i = 0; i < count; i++) {
    text += `Enter the registration section and enter your details registration`;
  }
  return (
    <div className={styles.container}>
      <p className={styles.question}>Where do I start to register?</p>
      <p className={styles.answer}>{text}</p>
    </div>
  );
}

export default FAQ;
