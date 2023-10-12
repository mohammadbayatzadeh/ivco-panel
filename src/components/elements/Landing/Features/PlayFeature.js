import React from "react";
import Image from "next/image";

//styles
import styles from "./playFeature.module.css";

function PlayFeature() {
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        <Image
          src="/images/Graphic-Decentralized-Box-p-1080.png"
          width={700}
          height={700}
          alt="feature"
          className={styles.playImage}
        />
        <Image
          src="/images/Graphic-Decentralized-Orbitals-p-1080.png"
          width={700}
          height={700}
          alt="feature"
          className={styles.playImage}
        />
        <Image
          src="/images/Graphic-Decentralized-Base-p-1080.png"
          width={700}
          height={700}
          alt="feature"
        />
      </div>
      <div className={styles.content}>
        <h4>
          Play with pleasure and earn money. Our wish is your championship
        </h4>
        <p>
          After registration, you can earn money from the game platform and
          introduce it to others. You can receive 70% of the amount of the loser
          in the game rooms. You will receive 1% of the total amount from each
          game played in your 25 levels
        </p>
        <div className={styles.options}>
          <div className={styles.option}>
            <Image
              src="/images/Icon-Reviews.svg"
              width={100}
              height={100}
              alt="option"
            />
            <p>constant reviews and testing of our platform</p>
          </div>
          <div className={styles.option}>
            <Image
              src="/images/Icon-Secure.svg"
              width={100}
              height={100}
              alt="option"
            />
            <p>security of your acconts</p>
          </div>
          <div className={styles.option}>
            <Image
              src="/images/Icon-Decentralized.svg"
              width={100}
              height={100}
              alt="option"
            />
            <p>Online calculations and deposit of daily withrawals</p>
          </div>
          <div className={styles.option}>
            <Image
              src="/images/Icon-Experience.svg"
              width={100}
              height={100}
              alt="option"
            />
            <p>Has the most powerful servers for gaming platforms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayFeature;
