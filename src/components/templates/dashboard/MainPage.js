import React from "react";
import styles from "./Mainpage.module.css";
import BuySection from "@/components/modules/dashboard/BuySection";
import InfoSection from "@/components/modules/dashboard/InfoSection";

function MainPage() {
  return (
    <div className={styles.container}>
      <BuySection />
      <InfoSection />
    </div>
  );
}

export default MainPage;
