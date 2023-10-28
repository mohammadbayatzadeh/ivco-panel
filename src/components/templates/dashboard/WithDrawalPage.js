"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

//components
import Table from "@/components/modules/dashboard/Table";
import Filter from "@/components/modules/dashboard/Filter";

function WithDrawalPage() {
  const [filter, setFilter] = useState("All");
  const statuses = ["All", "Pending", "Success", "Reject"];

  const headers = [
    "C-ID",
    "Day",
    "Amount ($)",
    "Status",
    "Created At",
    "Operation",
  ];
  const example = ["id", "5 june", "5.00 $", "Success", "2 june", "none"];

  return (
    <div className={styles.container}>
      <h2>Withdrawal</h2>
      <p>In this section, you can see all your withdrawal request</p>
      <Filter statuses={statuses} filter={filter} setFilter={setFilter} />
      <Table headers={headers} example={example} />
    </div>
  );
}

export default WithDrawalPage;
