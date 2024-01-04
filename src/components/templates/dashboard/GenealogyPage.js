"use client";
import { useContext } from "react";

//context
import { sessionContext } from "@/components/layouts/dashboard/DashboardLayout";

//styles
import styles from "./GenealogyPage.module.css";

//functions
import { getNameFromEmail } from "@/utils/functions";

const Row = ({ title, value }) => {
  return (
    <div className={styles.row}>
      <span>{title}:</span>
      <span>{value}</span>
    </div>
  );
};

function GenealogyPage() {
  const email = useContext(sessionContext);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>{getNameFromEmail(email)}</p>
        <Row title="All Sub-members" value={0} />
        <Row title="Line" value="R" />

        <span className={styles.line}></span>

        <Row title="NFT" value={0} />
        <Row title="Direct Sell" value={0} />
        <Row title="Personal Point" value={0} />
        <Row title="Group Point" value={0} />

        <span className={styles.line}></span>
        <Row title="Save" value={0} />
      </div>
    </div>
  );
}

export default GenealogyPage;
