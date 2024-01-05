//styles
import styles from "./Mainpage.module.css";

//components
import BuySection from "@/components/modules/dashboard/BuySection";
import InfoSection from "@/components/modules/dashboard/InfoSection";
import LineChart from "@/components/elements/charts/LineChart";
import GradientBorder from "@/components/elements/GradientBorder";

function MainPage() {
  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <InfoSection />
        <BuySection />
      </div>

      <GradientBorder marginB={20}>
        <div className={styles.chart}>
          <LineChart />
        </div>
      </GradientBorder>
    </div>
  );
}

export default MainPage;
