import React from "react";

//styles
import styles from "./Features.module.css";

//components
import PlayFeature from "../../elements/Landing/Features/PlayFeature";
import OwnFeature from "../../elements/Landing/Features/OwnFeature";
import AdvantageFeature from "../../elements/Landing/Features/AdvantageFeature";
import ProtocolFeature from "../../elements/Landing/Features/ProtocolFeature";

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
