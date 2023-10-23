import React from "react";
import styles from "./CreditCard.module.css";
import GradientBorder from "../GradientBorder";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { TbBrandCashapp } from "react-icons/tb";

function CreditCard() {
  return (
    <GradientBorder width="100%">
      <div className={styles.container}>
        <div className={styles.row}>
          <p>IVCO Pay</p>
          <BsCreditCard2FrontFill />
        </div>
        <p className={styles.code}>**** **** **** ****</p>
        <p>Balance</p>
        <p className={styles.balance}>
          <TbBrandCashapp /> 0.00
        </p>
      </div>
    </GradientBorder>
  );
}

export default CreditCard;
