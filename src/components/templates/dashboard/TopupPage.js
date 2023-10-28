"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

//components
import Table from "@/components/modules/dashboard/Table";

function TopupPage() {
  const [filter, setFilter] = useState("All");
  const headers = [
    "ID",
    "Day",
    "Type",
    "Total Pay",
    "Status",
    "Created At",
    "Operation",
  ];
  const example = ["id", "5 june", "Top up", "50", "Open", "1 june", "none"];

  return (
    <div className={styles.container}>
      <h2>Packages and TopUp</h2>
      <p>In this section, you can see all your orders record</p>
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
          onClick={() => setFilter("Open")}
          style={{ color: filter === "Open" ? "gold" : "white" }}
        >
          Open
        </span>
        <span
          onClick={() => setFilter("Expire")}
          style={{ color: filter === "Expire" ? "gold" : "white" }}
        >
          Expire
        </span>
        <span
          onClick={() => setFilter("Cancel")}
          style={{ color: filter === "Cancel" ? "gold" : "white" }}
        >
          Cancel
        </span>
        <span
          onClick={() => setFilter("Reject")}
          style={{ color: filter === "Reject" ? "gold" : "white" }}
        >
          Reject
        </span>
      </div>
      <Table example={example} headers={headers} />
    </div>
  );
}

export default TopupPage;
