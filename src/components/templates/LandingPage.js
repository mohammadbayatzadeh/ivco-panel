"use client";
import React, { useEffect, useState } from "react";

//styles
import styles from "./LandingPage.module.css";

//nav
import LandingNav from "../layouts/LandingNav";

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
import FloatButton from "../elements/Landing/Features/FloatButton";

function LandingPage() {
  const [float, setFloat] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (+window.innerHeight < +scrollY) {
        setFloat(true);
      } else {
        setFloat(false);
      }
    };
  }, []);

  return (
    <div className={styles.body}>
      <FloatButton show={float} />
      <div className={styles.container}>
        <LandingNav />
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
