import React from "react";
import PlayFeature from "../elements/PlayFeature";
import styles from "./Features.module.css";
import OwnFeature from "../elements/OwnFeature";
import AdvantageFeature from "../elements/AdvantageFeature";
import ProtocolFeature from "../elements/ProtocolFeature";

function Features() {
  return (
    <div className={styles.container}>
      <PlayFeature />
      <OwnFeature />
      <AdvantageFeature />
      <ProtocolFeature />
    </div>
  );
}

export default Features;
