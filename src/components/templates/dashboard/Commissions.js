"use client";
//styles
import { useState } from "react";
import styles from "./Commissions.module.css";

function Commissions() {
  const [filter, setFilter] = useState("All");

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
          name="All"
          style={{ color: filter === "All" ? "gold" : "white" }}
        >
          All
        </span>
        <span
          onClick={() => setFilter("Pending")}
          name="Pending"
          style={{ color: filter === "Pending" ? "gold" : "white" }}
        >
          Pending
        </span>
        <span
          onClick={() => setFilter("Paid")}
          name="Pending"
          style={{ color: filter === "Paid" ? "gold" : "white" }}
        >
          Paid
        </span>
      </div>
      <div className={styles.table}>
        <div className={styles.headers}>
          <span>C-ID</span>
          <span>Day</span>
          <span>Amount ($)</span>
          <span>Status</span>
          <span>Created at</span>
          <span>operation</span>
        </div>
        <div className={styles.example}>
          <span>id</span>
          <span>7 july</span>
          <span>20.00 $</span>
          <span>Paid</span>
          <span>5 july</span>
          <span>example</span>
        </div>
      </div>
    </div>
  );
}

export default Commissions;
