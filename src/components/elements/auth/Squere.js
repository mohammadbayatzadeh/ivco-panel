import React, { memo, useEffect, useRef, useState } from "react";

//styles
import styles from "./Squere.module.css";

function Squere({ setSize }) {
  const [hover, setHover] = useState(false);
  const ref = useRef();
  useEffect(() => {
    setSize(ref.current.clientWidth);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setHover(false);
    }, 2000);
  }, [hover]);

  return (
    <div
      className={hover ? `${styles.squere} ${styles.animation}` : styles.squere}
      ref={ref}
      onMouseEnter={() => setHover(true)}
    ></div>
  );
}

export default memo(Squere);
