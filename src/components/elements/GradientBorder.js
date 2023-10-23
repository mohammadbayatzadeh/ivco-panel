import React from "react";
import styles from "./GradientBorder.module.css";

function GradientBorder({ children, width = "fit-content", marginB = 0 }) {
  return (
    <div
      className={styles.container}
      style={{ width: width, marginBottom: marginB }}
    >
      {children}
    </div>
  );
}

export default GradientBorder;
