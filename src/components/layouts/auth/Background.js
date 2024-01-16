"use client";
import React, { useEffect, useState } from "react";
//styles
import styles from "./Background.module.css";

function Background({ children }) {
  const [size, setSize] = useState(0);
  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    console.log(w, h);
  }, []);
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
