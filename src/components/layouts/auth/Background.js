"use client";
import React, { useEffect, useState } from "react";
//styles
import styles from "./Background.module.css";
import Squere from "@/components/elements/auth/Squere";

function Background({ children }) {
  const [size, setSize] = useState(0);
  const [rows, setRows] = useState(5);
  useEffect(() => {
    // console.log(window.innerHeight, size);
    const r = size !== 0 && window.innerHeight / size;
    setRows(r + 1);
    // console.log(rows);
  }, [size]);
  return (
    <div className={styles.body}>
      {Array.from({ length: rows * 20 }, (_, i) => (
        <Squere key={i} size={size} setSize={setSize} />
      ))}
      {children}
    </div>
  );
}

export default Background;
