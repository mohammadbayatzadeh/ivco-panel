//styles
import { getNameFromEmail } from "@/utils/functions";
import styles from "./GenealogyPage.module.css";

function GenealogyPage({ email }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>{getNameFromEmail(email)}</p>
        <div className={styles.row}>
          <span>All Sub-members:</span>
          <span>0</span>
        </div>
        <div className={styles.row}>
          <span>Line:</span>
          <span>R</span>
        </div>
        <div className={styles.row}>
          <span>Line:</span>
          <span>R</span>
        </div>
        <span className={styles.line}></span>
        <div className={styles.row}>
          <span>NFT:</span>
          <span>R</span>
        </div>
        <div className={styles.row}>
          <span>Direct Sell:</span>
          <span>0</span>
        </div>
        <div className={styles.row}>
          <span>Personal Point:</span>
          <span>0</span>
        </div>
        <div className={styles.row}>
          <span>Group Point:</span>
          <span>0</span>
        </div>
        <span className={styles.line}></span>
        <div className={styles.row}>
          <span>save:</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
}

export default GenealogyPage;
