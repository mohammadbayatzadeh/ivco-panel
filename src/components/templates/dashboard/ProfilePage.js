import React from "react";
import styles from "./Pages.module.css";
import InputBox from "@/components/elements/dashboard/InputBox";

function ProfilePage() {
  return (
    <div className={styles.container}>
      <h2>Edit Profile</h2>
      <p>Edit your information according to each box</p>
      <InputBox title="Change E-mail address" label='E-mail'/>
      <InputBox title="Change Username" label='Username'/>
      <InputBox title="Change WalletID" label='WalletId'/>
    </div>
  );
}

export default ProfilePage;
