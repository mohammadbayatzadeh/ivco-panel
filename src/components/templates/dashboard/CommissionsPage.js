"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

//components
import Table from "@/components/modules/dashboard/Table";
import Filter from "@/components/modules/dashboard/Filter";

function CommissionsPage() {
  const [filter, setFilter] = useState("All");
  const statuses = ["All", "Pending", "Paid"];
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
      <Filter statuses={statuses} filter={filter} setFilter={setFilter} />
      <Table example={example} headers={headers} />
    </div>
  );
}

export default CommissionsPage;
