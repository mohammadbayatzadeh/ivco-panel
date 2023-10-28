"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

//components
import Table from "@/components/modules/dashboard/Table";

function WalletPage() {
  const [filter, setFilter] = useState("All");
  const headers = [
    "ID",
    "title",
    "Type",
    "Creditor ($)",
    "Debtor ($)",
    "Created At",
    "operation",
  ];
  const example = [
    "id",
    "Top up 5.86 $",
    "debtor",
    "25 $",
    "0",
    "2 june",
    "none",
  ];

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
      <Table example={example} headers={headers} />
    </div>
  );
}

export default WalletPage;
