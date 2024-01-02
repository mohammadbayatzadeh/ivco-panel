"use client";
import React, { useState } from "react";

//styles
import styles from "./LandingNav.module.css";

//elements
import NavItem from "../elements/Landing/items/NavItem";

function LandingNav() {
  const [show, setShow] = useState(false);
  return (
    <nav className={styles.nav} id="#">
      <div className={styles.wrapper}>
        <svg>
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            IVCO
          </text>
        </svg>
      </div>
      <label
        className={
          show ? `${styles.hamburger} ${styles.active}` : styles.hamburger
        }
        onClick={() => setShow((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className={show ? `${styles.menu} ${styles.active}` : styles.menu}>
        <NavItem title="Home" href="" setShow={setShow} />
        <NavItem title="Plans" href="app" setShow={setShow} />
        <NavItem title="FAQ" href="faq" setShow={setShow} />
        <NavItem title="Contact Us" href="contact" setShow={setShow} />
        <NavItem title="About Us" href="about" setShow={setShow} />
        <NavItem title="Contact Us" href="contact" setShow={setShow} />
        <NavItem title="Privacy Policy" href="privacy" setShow={setShow} />
      </ul>
    </nav>
  );
}

export default LandingNav;
