import React from "react";
import Image from "next/image";

//styles
import styles from "./ProtocolFeature.module.css";

function ProtocolFeature() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>Come for the memes, stay for the protocol.</h4>
        <p>
          While leverage trading on exotic pairs is great, having a Discord
          server full of memes and alpha is even better.
        </p>
        <p>
          Join our community of meme-loving masterminds and get the inside scoop
          on what’s coming down the pipeline.
        </p>
      </div>

      <div className={styles.features}>
        <Image
          src="/images/Graphic-Meme-Rocket-p-800.png"
          width={700}
          height={700}
          alt="feature"
          className={styles.playImage}
        />
        <Image
          src="/images/Graphic-Meme-Cat-p-1080.png"
          width={700}
          height={700}
          alt="feature"
          className={styles.playImage}
        />
        <Image
          src="/images/Graphic-Meme-Card-p-1080.png"
          width={700}
          height={700}
          alt="feature"
        />
      </div>
    </div>
  );
}

export default ProtocolFeature;
