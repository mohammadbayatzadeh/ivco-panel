"use client";
import React, { useEffect, useState } from "react";
//styles
import styles from "./Background.module.css";
import Squere from "@/components/elements/auth/Squere";

function Background({ children }) {
    
  useEffect(() => {}, []);
  return (
    <div className={styles.body}>
      <Squere /> <Squere /> <Squere /> <Squere /> <Squere /> <Squere />
      <Squere /> <Squere /> <Squere /> <Squere /> <Squere /> <Squere />
      <Squere /> <Squere /> <Squere /> <Squere /> <Squere /> <Squere />
      <Squere /> <Squere />
      {children}
    </div>
  );
}

export default Background;
