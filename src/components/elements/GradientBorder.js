import React from "react";
import styles from "./GradientBorder.module.css";

function GradientBorder({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default GradientBorder;
