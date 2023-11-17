"use client";

//styles
import styles from "./DashboardSideBar.module.css";

//components
import DashboardItem from "../../elements/dashboard/DashboardItem";

//icons
import { RxDashboard } from "react-icons/rx";
import { BsPercent, BsWifi } from "react-icons/bs";
import { MdAirlineStops } from "react-icons/md";
import { SlWallet, SlSupport } from "react-icons/sl";
import { GiTakeMyMoney, GiPlagueDoctorProfile } from "react-icons/gi";
import { PiSignOutBold } from "react-icons/pi";
import { IoGitNetworkOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiHomeSmile } from "react-icons/bi";

function DashboardSideBar({ show }) {
  return (
    <aside
      className={
        show ? `${styles.container} ${styles.active}` : styles.container
      }
    >
      <DashboardItem
        title="Home"
        icon={<BiHomeSmile />}
        href="/"
      />
      <DashboardItem
        title="Dashboard"
        icon={<RxDashboard />}
        href="/dashboard"
      />
      <DashboardItem
        title="Commissions"
        icon={<BsPercent />}
        href="/dashboard/commissions"
      />
      <DashboardItem
        title="OwnerShip"
        icon={<BsWifi />}
        href="/dashboard/ownership"
      />
      <DashboardItem
        title="TopUp"
        icon={<MdAirlineStops />}
        href="/dashboard/topup"
      />
      <DashboardItem
        title="Wallet"
        icon={<SlWallet />}
        href="/dashboard/wallet"
      />
      <DashboardItem
        title="Withdrawal"
        icon={<GiTakeMyMoney />}
        href="/dashboard/withdrawal"
      />
      <DashboardItem
        title="Genealogy"
        icon={<IoGitNetworkOutline />}
        href="/dashboard/genealogy"
      />
      <DashboardItem
        title="Support"
        icon={<SlSupport />}
        href="/dashboard/support"
      />
      <DashboardItem
        title="profile"
        icon={<GiPlagueDoctorProfile />}
        href="/dashboard/profile"
      />
      <DashboardItem
        title="password"
        icon={<RiLockPasswordLine />}
        href="/dashboard/password"
      />
      <DashboardItem title="Log Out" icon={<PiSignOutBold />} signout={true} />
    </aside>
  );
}

export default DashboardSideBar;
