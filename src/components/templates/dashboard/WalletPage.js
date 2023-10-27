"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

function WalletPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className={styles.container}>
      <h2>Wallet</h2>
      <p>In this section, you can see all your detail balance</p>
      <div className={styles.filter}>
        <span
          onClick={() => setFilter("All")}
          style={{ color: filter === "All" ? "gold" : "white" }}
        >
          All
        </span>
        <span
          onClick={() => setFilter("Debtor")}
          style={{ color: filter === "Debtor" ? "gold" : "white" }}
        >
          Debtor
        </span>
        <span
          onClick={() => setFilter("Creditor")}
          style={{ color: filter === "Creditor" ? "gold" : "white" }}
        >
          Creditor
        </span>
      </div>
      <div className={styles.table}>
        <div className={styles.headers}>
          <span>ID</span>
          <span>Title</span>
          <span>Type</span>
          <span>Creditor($)</span>
          <span>Created at</span>
          <span>operation</span>
        </div>
        <div className={styles.example}>
          <span>id</span>
          <span>TopUp in the amount of $ 5</span>
          <span>Point</span>
          <span>2.00 </span>
          <span>5 july</span>
          <span>show</span>
        </div>
      </div>
    </div>
  );
}

export default WalletPage;
