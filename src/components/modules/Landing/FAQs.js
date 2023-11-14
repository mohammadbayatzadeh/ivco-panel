import React from "react";

//styles
import styles from "./FAQs.module.css";

//components
import FAQ from "../../elements/Landing/items/FAQ";

function FAQs() {
  return (
    <div className={styles.container} id="faq">
      <h4>FAQ</h4>
      <FAQ count={5} />
      <FAQ count={1} />
      <FAQ count={2} />
      <FAQ count={3} />
      <FAQ count={4} />
      <FAQ count={8} />
    </div>
  );
}

export default FAQs;
