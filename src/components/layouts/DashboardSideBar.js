import React from "react";
import styles from "./DashboardSideBar.module.css";

function DashboardSideBar({ show }) {
  return (
    <aside
      className={
        show ? `${styles.container} ${styles.active}` : styles.container
      }
    >
      <p>DashboardSideBar</p>
    </aside>
  );
}

export default DashboardSideBar;
