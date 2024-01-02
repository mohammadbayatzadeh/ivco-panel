import React from "react";
import Image from "next/image";

//styles
import styles from "./features.module.css";

function AdvantageFeature() {
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        <Image
          src="/images/Graphic-Layer-Top-p-1080.png"
          width={700}
          height={700}
          alt="feature"
          className={styles.playImage}
        />
        <Image
          src="/images/Graphic-Layer-Coins-p-800.png"
          width={700}
          height={700}
          alt="feature"
          className={styles.playImage}
        />
        <Image
          src="/images/Graphic-Layer-Bottom-p-800.png"
          width={700}
          height={700}
          alt="feature"
        />
      </div>
      <div className={styles.content}>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia
        </h4>
        <div className={styles.options}>
          <div className={styles.option}>
            <Image
              src="/images/Icon-Reviews.svg"
              width={100}
              height={100}
              alt="option"
            />
            <p>Lorem ipsum dolor sit amet consectetur </p>
          </div>
          <div className={styles.option}>
            <Image
              src="/images/Icon-Secure.svg"
              width={100}
              height={100}
              alt="option"
            />
            <p>Lorem ipsum dolor sit amet consectetur </p>
          </div>
          <div className={styles.option}>
            <Image
              src="/images/Icon-Decentralized.svg"
              width={100}
              height={100}
              alt="option"
            />
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className={styles.option}>
            <Image
              src="/images/Icon-Experience.svg"
              width={100}
              height={100}
              alt="option"
            />
            <p>Lorem ipsum dolor sit amet consectetur Lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvantageFeature;
