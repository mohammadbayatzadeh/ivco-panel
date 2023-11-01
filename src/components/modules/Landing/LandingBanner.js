import React from "react";
import Image from "next/image";
import Link from "next/link";

//styles
import styles from "./LandingBanner.module.css";

//components
import CoinIcon from "../../elements/Landing/items/CoinIcon";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getNameFromEmail } from "@/utils/functions";

async function LandingBanner() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <h2>our credibility is your trust</h2>
        <p>International winners company</p>
        <div className={styles.buttons}>
          {email ? (
            <Link href="/dashboard">
              Welcome Back {getNameFromEmail(email)}
            </Link>
          ) : (
            <>
              <Link href="/login">LOGIN</Link>
              <Link href="/signup">SIGNUP</Link>
            </>
          )}
        </div>
      </div>

      <Image
        src="/images/Graphic-Purple-Wave.png"
        width={800}
        height={600}
        className={styles.purple}
        alt="design"
      />

      <Image
        src="/images/Graphic-Hero-Blur-p-1080.jpeg"
        width={800}
        height={600}
        className={styles.shadow}
        alt="design"
      />
      <Image
        src="/images/Graphic-Blue-Wave.png"
        width={800}
        height={600}
        className={styles.blue}
        alt="design"
      />
      <Image
        src="/images/Graphic-Teal-Wave.png"
        width={800}
        height={600}
        className={styles.teal}
        alt="design"
      />
      <div className={styles.icons}>
        <CoinIcon
          title="Trust Wallet"
          image="/images/tether.svg"
          x="20%"
          y={100}
        />
        <CoinIcon
          title="Tether TRC20"
          image="/images/TWT.svg"
          x="30%"
          y={300}
        />
        <CoinIcon
          title="Urneal Engine"
          image="/images/icons8-unreal-engine.svg"
          x="20%"
          y={450}
        />
      </div>
    </section>
  );
}

export default LandingBanner;
