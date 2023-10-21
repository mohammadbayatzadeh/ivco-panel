"use client";
import React from "react";
import styles from "./InfoSection.module.css";
import CopyToClipboard from "react-copy-to-clipboard";
import GradientBorder from "@/components/elements/GradientBorder";
import Toast from "@/components/elements/Toast";

function InfoSection() {
  return (
    <div className={styles.container}>
      <p>Your referral code to create a network</p>
      <div className={styles.row}>
        <GradientBorder width="49%">
          <CopyToClipboard
            text="L1966@4606"
            onCopy={() => Toast("code copied", "info")}
          >
            <p className={styles.idButton}>L1966@4606</p>
          </CopyToClipboard>
        </GradientBorder>
        <GradientBorder width="49%">
          <CopyToClipboard
            text="L1966@4606"
            onCopy={() => Toast("code copied", "info")}
          >
            <p className={styles.idButton}>L1966@4606</p>
          </CopyToClipboard>
        </GradientBorder>
      </div>
    </div>
  );
}

export default InfoSection;
