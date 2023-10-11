import React from "react";
import styles from "./LandingPage.module.css";
import DashboardNav from "../layouts/DashboardNav";
import LandingBanner from "../modules/LandingBanner";
import Pelans from "../modules/Pelans";

function LandingPage() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <DashboardNav />
        <LandingBanner />
        <Pelans />
      </div>
    </div>
  );
}

export default LandingPage;
