//styles
import styles from "./Commissions.module.css";

function Commissions() {
  return (
    <div className={styles.container}>
      <h2>Commissions</h2>
      <p>
        In this section, you can see all your Daily commissions from invest and
        binary plan
      </p>
      <div className={styles.filter}>
        <span>All</span>
        <span>Pending</span>
        <span>Paid</span>
      </div>
    </div>
  );
}

export default Commissions;
