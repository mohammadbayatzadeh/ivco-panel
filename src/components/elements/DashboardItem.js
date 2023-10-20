"use client";
import Link from "next/link";

//styles
import styles from "./DashboardItem.module.css";

function DashboardItem({ title, href, icon }) {
  return (
    <Link href="/" className={styles.link}>
      {icon}
      {title}
    </Link>
  );
}

export default DashboardItem;
