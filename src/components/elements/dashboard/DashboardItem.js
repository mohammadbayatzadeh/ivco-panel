"use client";
import Link from "next/link";

//styles
import styles from "./DashboardItem.module.css";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function DashboardItem({ title, href, icon, signout }) {
  const router = useRouter();
  const handler = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  if (signout) {
    return (
      <div className={styles.link} onClick={handler}>
        {icon}
        {title}
      </div>
    );
  } else {
    return (
      <Link href={`${href}`} className={styles.link}>
        {icon}
        {title}
      </Link>
    );
  }
}

export default DashboardItem;
