import React, { memo, useEffect, useRef } from "react";
import styles from "./Squere.module.css";

function Squere({ size, setSize }) {
  const ref = useRef();
  useEffect(() => {
    console.log(ref.current.clientWidth);
    setSize(ref.current.clientWidth);
  }, []);
  return <div className={styles.squere} ref={ref}></div>;
}

export default memo(Squere);
