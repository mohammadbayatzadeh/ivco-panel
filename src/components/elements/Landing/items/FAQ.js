import React from "react";

//styles
import styles from "./FAQ.module.css";

function FAQ() {
  return (
    <div className={styles.container}>
      <p className={styles.question}>Where do I start to register?</p>
      <p className={styles.answer}>
        Enter the registration section and enter your details
      </p>
    </div>
  );
}

export default FAQ;
