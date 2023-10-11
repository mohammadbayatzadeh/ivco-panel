import React from "react";
import styles from "./Pelans.module.css";
import Pelan from "../elements/Pelan";

function Pelans() {
  return (
    <div className={styles.container}>
      <h3>A world of infinity in your hands</h3>
      <p>
        The world's first network game based on your trust. You can play and
        network and earn money.
      </p>
      <div className={styles.pelans}>
        <Pelan
          title="Player"
          image="/images/Graphic-Leverage.png"
          tether="50 "
          binary={20}
          referral={10}
          iw={10}
          weekly={12}
        />
        <Pelan
          title="Strong Player"
          image="/images/Graphic-Pools.png"
          tether="200 "
          binary={20}
          referral={10}
          iw={30}
          weekly={15}
        />
        <Pelan
          title="Professional Player"
          image="/images/Graphic-Transactions.png"
          tether="500 "
          binary={20}
          referral={20}
          iw={50}
          weekly={17}
          daily={5}
        />
        <Pelan
          title="winner Player"
          image="/images/Graphic-execution.png"
          tether="1000 "
          binary={20}
          referral={20}
          iw={100}
          weekly={20}
          daily={10}
        />
      </div>
    </div>
  );
}

export default Pelans;
