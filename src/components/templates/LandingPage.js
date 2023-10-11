import React from "react";
import styles from "./LandingPage.module.css";
import DashboardNav from "../layouts/DashboardNav";
import LandingBanner from "../modules/LandingBanner";

function LandingPage() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <DashboardNav />
        <LandingBanner />
      </div>
    </div>
  );
}

export default LandingPage;
