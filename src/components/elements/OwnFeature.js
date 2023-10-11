import React from "react";
import styles from "./OwnFeature.module.css";
import Image from "next/image";

function OwnFeature() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>Owned by you.</h4>
        <p>
          Unlike Palpatine, we love democracy. That’s why our platform is
          designed to be governed by you. Do you want to be the hero of heroes?
          The platform makes it possible for you to play in major tournaments
          and have a chance to win the grand prize every round as the champion
          of champions. Do you want to passively earn high returns from trading
          fees and iwco bonuses? Simply upgrade your package today
        </p>
      </div>

      <div className={styles.features}>
        <Image
          src="/images/Graphic-Owned-Coins-p-800.png"
          width={700}
          height={700}
          alt="feature"
          className={styles.playImage}
        />
        <Image
          src="/images/Graphic-Owned-Block-p-1080.png"
          width={700}
          height={700}
          alt="feature"
          className={styles.playImage}
        />
        <Image
          src="/images/Graphic-Owned-Planets-p-1080.png"
          width={700}
          height={700}
          alt="feature"
        />
      </div>
    </div>
  );
}

export default OwnFeature;
