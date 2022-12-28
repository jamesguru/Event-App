import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebook,FaInstagramSquare,FaTwitter,FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
   <div className={styles.footer}>
     <div className={styles.container}>
      <div className={styles.footer_about}>
        <h2>MVX</h2>
        <span>
          MVX is the world’s leading community for creatives to share,
          grow, and get hired.
        </span>

        <div className={styles.icons}>
            <FaFacebook className={styles.icon}/>
            <FaInstagramSquare className={styles.icon} />
            <FaTwitter className={styles.icon}/>
            <FaPinterest className={styles.icon}/>
        </div>
      </div>


      <div className={styles.footer_item}>
        <h3>For designers</h3>

        <ul>

            <li>Go Pro!</li>
            <li>Explore design work</li>
            <li>Design blog</li>
            <li>Overtime podcast</li>
            <li>Playoffs</li>
            <li>Refer a Friend</li>
            <li>Code of conduct</li>
        </ul>

      </div>

      <div className={styles.footer_item}>
        <h3>Hire designers</h3>

        <ul>

            <li>Go Pro!</li>
            <li>Explore design work</li>
            <li>Design blog</li>
            <li>Overtime podcast</li>
            <li>Playoffs</li>
            <li>Refer a Friend</li>
            <li>Code of conduct</li>
        </ul>

      </div>

      <div className={styles.footer_item}>
        <h3>Company</h3>

        <ul>

            <li>Go Pro!</li>
            <li>Explore design work</li>
            <li>Design blog</li>
            <li>Overtime podcast</li>
            <li>Playoffs</li>
            <li>Refer a Friend</li>
            <li>Code of conduct</li>
        </ul>

      </div>
      <div className={styles.footer_item}>
        <h3>Directories</h3>

        <ul>

            <li>Go Pro!</li>
            <li>Explore design work</li>
            <li>Design blog</li>
            <li>Overtime podcast</li>
            <li>Playoffs</li>
            <li>Refer a Friend</li>
            <li>Code of conduct</li>
        </ul>

      </div>

      
    </div>

    <hr />

    <span>&copy;  MVX. All rights reserved.</span>
   </div>
  );
};

export default Footer;
