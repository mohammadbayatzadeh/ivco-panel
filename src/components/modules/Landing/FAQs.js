import React from "react";

//styles
import styles from "./FAQs.module.css";

//components
import FAQ from "../../elements/Landing/items/FAQ";

function FAQs() {
  return (
    <div className={styles.container} id="faq">
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
