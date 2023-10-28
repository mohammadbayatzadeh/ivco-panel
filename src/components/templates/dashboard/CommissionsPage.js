"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

//components
import Table from "@/components/modules/dashboard/Table";

function CommissionsPage() {
  const [filter, setFilter] = useState("All");
  const headers = [
    "C-ID",
    "Day",
    "Amount ($)",
    "Status",
    "Created At",
    "Operation",
  ];
  const example = [];

  return (
    <div className={styles.container}>
      <h2>Commissions</h2>
      <p>
        In this section, you can see all your Daily commissions from invest and
        binary plan
      </p>
      <div className={styles.filter}>
        <span
          onClick={() => setFilter("All")}
          style={{ color: filter === "All" ? "gold" : "white" }}
        >
          All
        </span>
        <span
          onClick={() => setFilter("Pending")}
          style={{ color: filter === "Pending" ? "gold" : "white" }}
        >
          Pending
        </span>
        <span
          onClick={() => setFilter("Paid")}
          style={{ color: filter === "Paid" ? "gold" : "white" }}
        >
          Paid
        </span>
      </div>
      <Table example={example} headers={headers} />
    </div>
  );
}

export default CommissionsPage;
