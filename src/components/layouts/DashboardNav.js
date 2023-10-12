import React from "react";

//styles
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
          <a href="#privacy">Privacy Policy</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#app">App</a>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardNav;
