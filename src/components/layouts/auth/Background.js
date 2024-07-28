"use client";
import React, { useLayoutEffect, useState } from "react";

//styles
import styles from "./Background.module.css";

//elements
import Squere from "@/components/elements/auth/Squere";

function Background({ children }) {
  const [size, setSize] = useState(0);
  const [rows, setRows] = useState(0);

  useLayoutEffect(() => {
    const r = size !== 0 && window.innerHeight / size;
    setRows(r + 1);
  }, [size]);

  return (
    <div className={styles.body}>
      {Array.from({ length: rows * 70 }, (_, i) => (
        <Squere key={i} size={size} setSize={setSize} />
      ))}
      {children}
    </div>
  );
}

export default Background;
