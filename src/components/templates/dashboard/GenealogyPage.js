import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import connectDB from "@/utils/connectDB";

//styles
import styles from "./GenealogyPage.module.css";

//functions
import { getNameFromEmail } from "@/utils/functions";

const Row = ({ title, value }) => {
  return (
    <div className={styles.row}>
      <span>{title}:</span>
      <span>{value}</span>
    </div>
  );
};

async function GenealogyPage() {
  await connectDB();
  const session = await getServerSession(authOptions);
  return (
    <div className={styles.container}>
      {session ? (
        <div className={styles.box}>
          <p>{getNameFromEmail(session.user.email)}</p>
          <Row title="All Sub-members" value={0} />

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
      ) : (
        <p>SomeThing went wrong...</p>
      )}
    </div>
  );
}

export default GenealogyPage;
