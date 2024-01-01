import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

//styles
import styles from "./Pages.module.css";

//elements
import InputBox from "@/components/elements/dashboard/InputBox";

//functions
import connectDB from "@/utils/connectDB";
import { getNameFromEmail } from "@/utils/functions";

async function ProfilePage() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/dashboard");
  return (
    <div className={styles.container}>
      <h2>Edit Profile</h2>
      <p>Edit your information according to each box</p>
      <InputBox
        title="Change E-mail address"
        label="E-mail"
        value={session.user.email}
      />
      <InputBox
        title="Change Username"
        label="Username"
        value={getNameFromEmail(session.user.email)}
      />
      <InputBox
        title="Change WalletID"
        label="WalletId"
        value="lknvlsm45645ewofjisd"
      />
    </div>
  );
}

export default ProfilePage;
