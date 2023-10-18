import React from "react";
import styles from "./Dashboard.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { getNameFromEmail } from "@/utils/functions";

function DashboardLayout({ children, email }) {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <MdSpaceDashboard />
        <p>Hi , {getNameFromEmail(email)} </p>
      </nav>
      {children}
    </div>
  );
}

export default DashboardLayout;
