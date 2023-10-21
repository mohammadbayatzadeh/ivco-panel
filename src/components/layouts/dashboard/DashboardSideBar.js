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
      <DashboardItem title="Dashboard" icon={<RxDashboard />} />
      <DashboardItem title="Commission" icon={<BsPercent />} />
      <DashboardItem title="OwnerShip" icon={<BsWifi />} />
      <DashboardItem title="TopUp" icon={<MdAirlineStops />} />
      <DashboardItem title="Wallet" icon={<SlWallet />} />
      <DashboardItem title="Withdrawal" icon={<GiTakeMyMoney />} />
      <DashboardItem title="Support" icon={<SlSupport />} />
      <DashboardItem title="profile" icon={<GiPlagueDoctorProfile />} />
      <DashboardItem title="Log Out" icon={<PiSignOutBold />} signout={true} />
    </aside>
  );
}

export default DashboardSideBar;
