"use client";
//styles
import styles from "./Pages.module.css";

//compnents
import Filter from "@/components/modules/dashboard/Filter";
import Table from "@/components/modules/dashboard/Table";
import Link from "next/link";

import { useState } from "react";
function SupportPage() {
  const [filter, setFilter] = useState("All");
  const statuses = ["All", "Open", "Answered", "Pending", "Close"];
  const example = ["ID", "Title", "Stauts", "Date", "Operation"];
  const headers = ["id", "test", "open", "1 January", "none"];
  return (
    <div className={styles.container}>
      <h2>Tickets</h2>
      <p>We are by your side</p>
      <div className={styles.row}>
        <Filter statuses={statuses} filter={filter} setFilter={setFilter} />
        <Link href="/dashboard/support/new-ticket">New ticket</Link>
      </div>
      <Table example={example} headers={headers} modal={true} />
    </div>
  );
}

export default SupportPage;
