"use client";
import React, { useState } from "react";

//styles
import styles from "./Dashboard.module.css";

//icons
import { MdSpaceDashboard } from "react-icons/md";

//fundtions
import { getNameFromEmail } from "@/utils/functions";
import DashboardSideBar from "./DashboardSideBar";

function DashboardLayout({ children, email }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <MdSpaceDashboard
          onClick={() => setShowSidebar(!showSidebar)}
          className={
            showSidebar
              ? `${styles.dashboard} ${styles.active}`
              : styles.dashboard
          }
        />
        <p>Hi , {getNameFromEmail(email)} </p>
      </nav>
      <DashboardSideBar show={showSidebar} />
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export default DashboardLayout;
