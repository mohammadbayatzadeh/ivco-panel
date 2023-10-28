"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

//components
import Table from "@/components/modules/dashboard/Table";

function WithDrawalPage() {
  const [filter, setFilter] = useState("All");
  const headers = [
    "C-ID",
    "Day",
    "Amount ($)",
    "Status",
    "Created At",
    "Operation",
  ];
  const example = ["id", "5 june", "5.00 $", "Seccess", "2 june", "none"];

  return (
    <div className={styles.container}>
      <h2>Withdrawal</h2>
      <p>In this section, you can see all your withdrawal request</p>
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
          onClick={() => setFilter("Success")}
          style={{ color: filter === "Success" ? "gold" : "white" }}
        >
          Success
        </span>
        <span
          onClick={() => setFilter("Reject")}
          style={{ color: filter === "Reject" ? "gold" : "white" }}
        >
          Reject
        </span>
      </div>
      <Table headers={headers} example={example} />
    </div>
  );
}

export default WithDrawalPage;
