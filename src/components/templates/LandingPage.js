import React from "react";

//styles
import styles from "./LandingPage.module.css";

//nav
import DashboardNav from "../layouts/DashboardNav";

//components
import LandingBanner from "../modules/Landing/LandingBanner";
import Pelans from "../modules/Landing/Pelans";
import Features from "../modules/Landing/Features";
import FAQs from "../modules/Landing/FAQs";
import ContactUs from "../modules/Landing/ContactUs";
import AboutUs from "../modules/Landing/AboutUs";
import Supporters from "../modules/Landing/Supporters";
import Privacy from "../modules/Landing/Privacy";
import Footer from "../modules/Landing/Footer";

function LandingPage() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <DashboardNav />
        <LandingBanner />
        <Pelans />
        <Features />
        <FAQs />
        <ContactUs />
        <AboutUs />
        <Supporters />
        <Privacy />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
