import React from "react";

//styles
import styles from "./Pelans.module.css";

//components
import Pelan from "../../elements/Landing/items/Pelan";

function Pelans() {
  return (
    <div className={styles.container} id="app">
      <h3>Lorem ipsum dolor sit</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia
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
          image="/images/Graphic-Execution.png"
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
