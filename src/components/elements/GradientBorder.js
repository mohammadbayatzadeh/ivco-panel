import React from "react";
import styles from "./GradientBorder.module.css";

function GradientBorder({ children, width = "fit-content" }) {
  return (
    <div className={styles.container} style={{ width: width }}>
      {children}
    </div>
  );
}

export default GradientBorder;
