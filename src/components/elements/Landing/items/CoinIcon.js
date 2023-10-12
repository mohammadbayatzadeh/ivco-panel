import React from "react";
import Image from "next/image";

//styles
import styles from "./CoinIcon.module.css";

function CoinIcon({ title, x = 20, y = 40, image }) {
  return (
    <div className={styles.container} style={{ top: y, right: x }}>
      <span>{title}</span>
      <Image
        src={image}
        width={50}
        height={50}
        alt="unreal engine"
        className={styles.image}
      />
    </div>
  );
}

export default CoinIcon;
