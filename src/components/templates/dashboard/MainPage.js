//styles
import styles from "./Mainpage.module.css";

//components
import BuySection from "@/components/modules/dashboard/BuySection";
import InfoSection from "@/components/modules/dashboard/InfoSection";
import LineChart from "@/components/elements/charts/LineChart";

function MainPage() {
  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <InfoSection />
        <BuySection />
      </div>

      <div className={styles.chart}>
        <LineChart />
      </div>
    </div>
  );
}

export default MainPage;
