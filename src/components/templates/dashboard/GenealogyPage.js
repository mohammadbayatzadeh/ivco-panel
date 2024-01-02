import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

//functions
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
          <Row title="Line" value="R" />

          <span className={styles.line}></span>

          <Row title="NFT" value={0} />
          <Row title="Direct Sell" value={0} />
          <Row title="Personal Point" value={0} />
          <Row title="Group Point" value={0} />

          <span className={styles.line}></span>
          <Row title="Save" value={0} />
        </div>
      ) : (
        <p>SomeThing went wrong...</p>
      )}
    </div>
  );
}

export default GenealogyPage;
