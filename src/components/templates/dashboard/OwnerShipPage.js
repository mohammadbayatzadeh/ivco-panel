"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

//components
import Table from "@/components/modules/dashboard/Table";
import Filter from "@/components/modules/dashboard/Filter";

function OwnerShipPage() {
  const [filter, setFilter] = useState("All");
  const statuses = ["All", "Pending", "Open", "Expire", "Cancle", "Reject"];
  const headers = [
    "ID",
    "Day",
    "Total Pay (T)",
    "Expiration",
    "Status",
    "Created At",
    "Operation",
  ];
  const example = [
    "id",
    "5 june",
    "6",
    "7 September",
    "Open",
    "1 june",
    "none",
  ];

  return (
    <div className={styles.container}>
      <h2>Ownership Interest</h2>
      <p>In this section, you can see all your orders record</p>
      <Filter statuses={statuses} filter={filter} setFilter={setFilter} />
      <Table example={example} headers={headers} />
    </div>
  );
}

export default OwnerShipPage;
