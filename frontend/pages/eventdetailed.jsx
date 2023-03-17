import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/Eventdetailed.module.css";
import { FaLocationArrow, FaGamepad } from "react-icons/fa";

const eventdetailed = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.image}>
          <img src="/Featured.jpg" alt="" />
        </div>
        <div className={styles.detailed}>
          <h2>Dinner Party</h2>

          <div>
            <span>Date: 2022-10-01</span>

            <span>
              <FaLocationArrow  className={styles.icons}/> Karen,Nairobi
            </span>

            <span>
              <FaGamepad className={styles.icons}/> Online
            </span>
          </div>

          <div className={styles.reminder}>
            <button>Set Reminder</button>
          </div>

          <div className={styles.bottom_detail}>
            <span>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </span>
          </div>
        </div>

        
      </div>
      <div className={styles.media}>

          <h2>Events photos and videos</h2>

          <video
            src="/video.mp4"
            
            controls
            muted
            loop
           
          />
        </div>
      <Footer />
    </div>
  );
};

export default eventdetailed;
