"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

//components
import Table from "@/components/modules/dashboard/Table";
import Filter from "@/components/modules/dashboard/Filter";
import Modal from "@/components/modules/dashboard/Modal";

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
  const modalOptions = [
    "50 - Your Top up payment is 45",
    "200 - Your Top up payment is 195",
    "500 - Your Top up payment is 495",
    "1000 - Your Top up payment is 9995",
  ];

  return (
    <div className={styles.container}>
      <h2>Packages and TopUp</h2>
      <p>In this section, you can see all your orders record</p>
      <div className={styles.row}>
        <Filter statuses={statuses} filter={filter} setFilter={setFilter} />
        <Modal
          title="New order"
          header="Top Up"
          options={modalOptions}
          inputs={["Transaction ID"]}
        />
      </div>
      <Table example={example} headers={headers} modal={true} />
    </div>
  );
}

export default TopupPage;
