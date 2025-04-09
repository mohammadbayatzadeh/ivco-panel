"use client";
import { createContext, useEffect, useState } from "react";

//styles
import styles from "./Dashboard.module.css";

//icons
import { MdSpaceDashboard } from "react-icons/md";

//fundtions
import { getNameFromEmail } from "@/utils/functions";
import { usePathname } from "next/navigation";
import DashboardSideBar from "./DashboardSideBar";

export const sessionContext = createContext();

function DashboardLayout({ children, email }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const path = usePathname();
  useEffect(() => {
    setShowSidebar(false);
  }, [path]);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <MdSpaceDashboard
          onClick={() => setShowSidebar(!showSidebar)}
          className={
            showSidebar
              ? `${styles.dashboard} ${styles.active}`
              : styles.dashboard
          }
        />
        <p>Hi , {getNameFromEmail(email)} </p>
      </nav>
      <DashboardSideBar show={showSidebar} />
      <div className={styles.body}>
        <sessionContext value={email}>{children}</sessionContext>
      </div>
    </div>
  );
}

export default DashboardLayout;
