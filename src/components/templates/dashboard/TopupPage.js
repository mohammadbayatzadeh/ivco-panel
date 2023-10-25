"use client";
import { useState } from "react";

//styles
import styles from "./CommissionsPage.module.css";

function TopupPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className={styles.container}>
      <h2>Packages and TopUp</h2>
      <p>In this section, you can see all your orders record</p>
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
          onClick={() => setFilter("Open")}
          name="Open"
          style={{ color: filter === "Open" ? "gold" : "white" }}
        >
          Open
        </span>
        <span
          onClick={() => setFilter("Expire")}
          name="Expire"
          style={{ color: filter === "Expire" ? "gold" : "white" }}
        >
          Expire
        </span>
        <span
          onClick={() => setFilter("Cancel")}
          name="Cancel"
          style={{ color: filter === "Cancel" ? "gold" : "white" }}
        >
          Cancel
        </span>
        <span
          onClick={() => setFilter("Reject")}
          name="Reject"
          style={{ color: filter === "Reject" ? "gold" : "white" }}
        >
          Reject
        </span>
      </div>
      <div className={styles.table}>
        <div className={styles.headers}>
          <span>ID</span>
          <span>Day</span>
          <span>Type</span>
          <span>Status</span>
          <span>Created at</span>
          <span>operation</span>
        </div>
        <div className={styles.example}>
          <span>id</span>
          <span>7 july</span>
          <span>Top up</span>
          <span>open</span>
          <span>5 july</span>
          <span>example</span>
        </div>
      </div>
    </div>
  );
}

export default TopupPage;
