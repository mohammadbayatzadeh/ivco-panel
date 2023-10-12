import React from "react";
import styles from "./FAQs.module.css";
import FAQ from "../elements/FAQ";

function FAQs() {
  return (
    <div className={styles.container}>
      <h4>FAQ</h4>
      <FAQ />
      <FAQ />
      <FAQ />
      <FAQ />
      <FAQ />
      <FAQ />
    </div>
  );
}

export default FAQs;
