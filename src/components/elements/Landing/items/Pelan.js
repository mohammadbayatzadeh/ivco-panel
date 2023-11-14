import React from "react";
import Image from "next/image";

//styles
import styles from "./Pelan.module.css";

function Pelan({
  title,
  tether,
  binary,
  referral,
  weekly,
  iw,
  daily,
  image,
  color,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} width={100} height={100} alt="pelans" />
      </div>
      <div className={styles.card}>
        <span style={{ color }}></span>
        <p className={styles.title}>{title}</p>
        <p>
          {tether}
          tether
        </p>
        <p>Binary Income : {binary}%</p>
        <p>Referral income : {referral}%</p>
        <p>Weekly Income : {weekly}x</p>
        <p>IW coin : {iw}</p>
        {daily && <p>daily {daily}</p>}
      </div>
    </div>
  );
}

export default Pelan;
