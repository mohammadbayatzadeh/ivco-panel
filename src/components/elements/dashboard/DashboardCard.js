import React from "react";

//styles
import styles from "./DashboardCard.module.css";

//icons
import { TbBrandCashapp } from "react-icons/tb";

function DashboardCard({ title, value, width = "49%" }) {
  return (
    <div className={styles.container} style={{ width: width }}>
      <p>{title}</p>
      <p className={styles.price}>
        <TbBrandCashapp />
        {value}
      </p>
      <span></span>
    </div>
  );
}

export default DashboardCard;
