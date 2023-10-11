import React from "react";
import styles from "./DashboardNav.module.css";

function DashboardNav() {
  return (
    <nav className={styles.nav}>
      <h1>IWCO</h1>
      <input type="checkbox" id="menu-toggle" className={styles.checkbox} />
      <label className={styles.hamburger} htmlFor="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className={styles.menu}>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">App</a>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardNav;
