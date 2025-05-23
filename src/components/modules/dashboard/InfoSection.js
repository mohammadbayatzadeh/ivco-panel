"use client";

//styles
import styles from "./InfoSection.module.css";

//elements
import GradientBorder from "@/components/elements/GradientBorder";
import CreditCard from "@/components/elements/dashboard/CreditCard";
import DashboardCard from "@/components/elements/dashboard/DashboardCard";

function InfoSection() {
  return (
    <div className={styles.container}>
      <p>Your referral code to create a network</p>
      <div className={styles.row}>
        <GradientBorder width="49%">
          <p className={styles.idButton}>L1966@4606</p>
        </GradientBorder>
        <GradientBorder width="49%">
          <p className={styles.idButton}>L1966@4606</p>
        </GradientBorder>
      </div>
      <div className={styles.row}>
        <div className={styles.cards}>
          <DashboardCard title="Starter" value="5.00" />
          <DashboardCard title="Coins" value="25.00" />
          <DashboardCard title="Withdraw" value="0" />
          <DashboardCard title="Direct Sell" value="0" />
          <DashboardCard title="Commission" value="0" />
        </div>
        <div className={styles.credit}>
          <CreditCard />
          <DashboardCard width="100%" title="Total WSA and WGA" value="10.00" />
          <DashboardCard width="100%" title="Your Weekly Point" value="10.00" />
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
