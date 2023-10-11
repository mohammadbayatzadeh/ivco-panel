import React from "react";
import styles from "./LandingBanner.module.css";
import Image from "next/image";
import Link from "next/link";
import CoinIcon from "../elements/CoinIcon";

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
      <div className={styles.icons}>
        <CoinIcon title="Trust Wallet" image='/images/tether.svg' x='20%' y={100} />
        <CoinIcon title="Tether TRC20" image='/images/TWT.svg' x='30%' y={300} />
        <CoinIcon title="Urneal Engine" image='/images/icons8-unreal-engine.svg' x='20%' y={450} />
      </div>
    </section>
  );
}

export default LandingBanner;
