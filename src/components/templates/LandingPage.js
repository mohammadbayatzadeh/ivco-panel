import React from "react";
import styles from "./LandingPage.module.css";
import DashboardNav from "../layouts/DashboardNav";
import LandingBanner from "../modules/LandingBanner";
import Pelans from "../modules/Pelans";
import Features from "../modules/Features";
import FAQs from "../modules/FAQs";
import ContactUs from "../modules/ContactUs";

function LandingPage() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <DashboardNav />
        <LandingBanner />
        <Pelans />
        <Features />
        <FAQs />
        <ContactUs />
      </div>
    </div>
  );
}

export default LandingPage;
