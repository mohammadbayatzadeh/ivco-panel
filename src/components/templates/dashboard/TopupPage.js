"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

//components
import Table from "@/components/modules/dashboard/Table";
import Filter from "@/components/modules/dashboard/Filter";

function TopupPage() {
  const [filter, setFilter] = useState("All");
  const statuses = ["All", "Pending", "Open", "Expire", "Cancle", "Reject"];
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
      <Filter statuses={statuses} filter={filter} setFilter={setFilter} />
      <Table example={example} headers={headers} />
    </div>
  );
}

export default TopupPage;
