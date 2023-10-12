import React from "react";
import styles from "./Supporters.module.css";
import Image from "next/image";

function Supporters() {
  return (
    <div className={styles.container}>
      <h4>Backed By The Best</h4>
      <div className={styles.icons}>
        <Image
          src="/images/vertical_blue.svg"
          height={200}
          width={200}
          alt="supporter"
        />
        <Image
          src="/images/Unreal_Engine_Logo.svg"
          height={200}
          width={200}
          alt="supporter"
        />
        <Image
          src="/images/tron-trx-logo-full.svg"
          height={200}
          width={200}
          alt="supporter"
        />
        <Image
          src="/images/Tether_Logo.svg"
          height={200}
          width={200}
          alt="supporter"
        />
      </div>
    </div>
  );
}

export default Supporters;
