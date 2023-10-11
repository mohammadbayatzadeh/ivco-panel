import React from "react";
import styles from "./LandingBanner.module.css";
import Image from "next/image";
import Link from "next/link";

function LandingBanner() {
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <h2>our credibility is your trust</h2>
        <p>International winners company</p>
        <div className={styles.buttons}>
          <Link href="/login">LOGIN</Link>
          <Link href="/login">SIGNUP</Link>
        </div>
      </div>
     
      <Image
        src="images/Graphic-Purple-Wave.svg"
        width={800}
        height={600}
        className={styles.purple}
      />
      <Image
        src="images/Graphic-Teal-Wave.svg"
        width={800}
        height={600}
        className={styles.teal}
      />
    </section>
  );
}

export default LandingBanner;
