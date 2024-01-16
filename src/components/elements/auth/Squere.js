import React, { memo, useEffect, useRef } from "react";

//styles
import styles from "./Squere.module.css";

function Squere({ setSize }) {
  const ref = useRef();
  useEffect(() => {
    setSize(ref.current.clientWidth);
  }, []);
  return <div className={styles.squere} ref={ref}></div>;
}

export default memo(Squere);
