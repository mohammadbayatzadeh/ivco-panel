import React from "react";

//styles
import styles from "./DashboardNav.module.css";

function DashboardNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Lorem ipsum
          </text>
        </svg>
      </div>
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
