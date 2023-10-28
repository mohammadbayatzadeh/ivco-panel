"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

//components
import Table from "@/components/modules/dashboard/Table";
import Filter from "@/components/modules/dashboard/Filter";

function WalletPage() {
  const [filter, setFilter] = useState("All");
  const statuses = ["All", "Debtor", "Creditor"];

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

      <Filter statuses={statuses} filter={filter} setFilter={setFilter} />
      <Table example={example} headers={headers} />
    </div>
  );
}

export default WalletPage;
