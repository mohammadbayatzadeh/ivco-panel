"use client";
import React, { useRef, useState } from "react";

//styles
import styles from "./FAQ.module.css";

//icons
import { GiWideArrowDunk } from "react-icons/gi";
function FAQ({ count }) {
  const [show, setShow] = useState(false);
  let text = "";
  const contentEl = useRef();
  for (let i = 0; i < count; i++) {
    text += `Enter the registration section and enter your details registration`;
  }
  return (
    <div className={styles.container}>
      <div className={styles.question}>
        <p>Where do I start to register?</p>
        <GiWideArrowDunk
          onClick={() => setShow((prev) => !prev)}
          style={show ? { rotate: "120deg" } : ""}
        />
      </div>
      <p
        className={show ? ` ${styles.answer} ${styles.active}` : styles.answer}
        style={
          show
            ? { height: contentEl.current.scrollHeight + 14 }
            : { height: "0px" }
        }
        ref={contentEl}
      >
        {text}
      </p>
    </div>
  );
}

export default FAQ;
