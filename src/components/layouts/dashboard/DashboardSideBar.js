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

function DashboardSideBar({ show }) {
  return (
    <aside
      className={
        show ? `${styles.container} ${styles.active}` : styles.container
      }
    >
      <DashboardItem
        title="Dashboard"
        icon={<RxDashboard />}
        href="/dashboard"
      />
      <DashboardItem
        title="Commission"
        icon={<BsPercent />}
        href="/dashboard"
      />
      <DashboardItem title="OwnerShip" icon={<BsWifi />} href="/dashboard" />
      <DashboardItem
        title="TopUp"
        icon={<MdAirlineStops />}
        href="/dashboard"
      />
      <DashboardItem title="Wallet" icon={<SlWallet />} href="/dashboard" />
      <DashboardItem
        title="Withdrawal"
        icon={<GiTakeMyMoney />}
        href="/dashboard"
      />
      <DashboardItem title="Support" icon={<SlSupport />} href="/dashboard" />
      <DashboardItem
        title="profile"
        icon={<GiPlagueDoctorProfile />}
        href="/dashboard"
      />
      <DashboardItem title="Log Out" icon={<PiSignOutBold />} signout={true} />
    </aside>
  );
}

export default DashboardSideBar;
