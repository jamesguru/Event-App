import React from "react";
import styles from "../styles/HomePage.module.css";
import Events from "./Events";
import Featured from "./Featured";
import Footer from "./Footer";
import Navbar from "./NavBar";
const HomePage = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Featured />
      <Events />
      <Footer />
    </div>
  );
};

export default HomePage;
