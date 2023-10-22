import React from "react";

//styles
import styles from "./DashboardCard.module.css";

//icons
import { TbBrandCashapp } from "react-icons/tb";

function DashboardCard({ title, value }) {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <p className={styles.price}>
        <TbBrandCashapp />
        {value}
      </p>
    </div>
  );
}

export default DashboardCard;
