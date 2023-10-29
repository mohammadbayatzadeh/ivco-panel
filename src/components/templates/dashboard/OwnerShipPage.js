"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

//components
import Table from "@/components/modules/dashboard/Table";
import Filter from "@/components/modules/dashboard/Filter";
import Modal from "@/components/modules/dashboard/Modal";

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
  const modalOptions = [
    "3 month",
    "6 month",
    "9 month",
    "12 month",
    "36 month",
  ];

  return (
    <div className={styles.container}>
      <h2>Ownership Interest</h2>
      <p>In this section, you can see all your orders record</p>
      <div className={styles.row}>
        <Filter statuses={statuses} filter={filter} setFilter={setFilter} />
        <Modal
          title="New order"
          header="USA cue(Billiards)"
          options={modalOptions}
          inputs={["Amount", "Transaction ID"]}
        />
      </div>
      <Table example={example} headers={headers} modal={true} />
    </div>
  );
}

export default OwnerShipPage;
