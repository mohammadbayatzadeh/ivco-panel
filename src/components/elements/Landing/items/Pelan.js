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
  const shadowStyle = {
    red: "redShadow",
    blue: "blueShadow",
    yellow: "yellowShadow",
    green: "greenShadow",
  };
  const shadowColor = shadowStyle[color];
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} width={100} height={100} alt="pelans" />
      </div>
      <div className={styles.card}>
        <span className={styles[shadowColor]}></span>
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
