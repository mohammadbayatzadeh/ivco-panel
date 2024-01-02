import React from "react";

//styles
import styles from "./CreditCard.module.css";

//elements
import GradientBorder from "../GradientBorder";

//icons
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { TbBrandCashapp } from "react-icons/tb";

function CreditCard() {
  return (
    <GradientBorder width="100%" marginB="10px">
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
