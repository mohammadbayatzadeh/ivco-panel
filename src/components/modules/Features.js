import React from "react";
import PlayFeature from "../elements/PlayFeature";
import styles from "./Features.module.css";
import OwnFeature from "../elements/OwnFeature";

function Features() {
  return (
    <div className={styles.container}>
      <PlayFeature />
      <OwnFeature />
    </div>
  );
}

export default Features;
