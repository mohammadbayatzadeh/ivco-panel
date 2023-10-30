"use client";
import { useState } from "react";

//styles
import styles from "./Pages.module.css";

//components
import Table from "@/components/modules/dashboard/Table";
import Filter from "@/components/modules/dashboard/Filter";
import Modal from "@/components/modules/dashboard/Modal";

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
      <div className={styles.row}>
        <Filter statuses={statuses} filter={filter} setFilter={setFilter} />
        <Modal
          title="New request"
          header="Withdrawal Request"
          inputs={["Amount $"]}
          details={false}
        />
      </div>
      <Table headers={headers} example={example} modal={true} />
    </div>
  );
}

export default WithDrawalPage;
