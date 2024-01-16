import React from "react";
import styles from "./Background.module.css";

function Background({ children }) {
  return (
    <div className={styles.body}>
      <div className={styles.squere}></div>
      <div className={styles.squere}></div>
      <div className={styles.squere}></div>
      <div className={styles.squere}></div>
      <div className={styles.squere}></div>
      {children}
    </div>
  );
}

export default Background;
