"use client";
import { useState } from "react";
//styles
import styles from "./Pages.module.css";

function WithDrawalPage() {
  const [filter, setFilter] = useState("All");

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
      <div className={styles.table}>
        <div className={styles.headers}>
          <span>W-ID</span>
          <span>Amount</span>
          <span>Stauts</span>
          <span>Created at</span>
          <span>Creditor</span>
          <span>operation</span>
        </div>
        <div className={styles.example}>
          <span>id</span>
          <span>5.00 $</span>
          <span>Success</span>
          <span>5 july</span>
          <span>Name</span>
          <span>withdrawal</span>
        </div>
      </div>
    </div>
  );
}

export default WithDrawalPage;
