import styles from "../styles/MCS.module.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import React, { useState } from "react";
const MCS = () => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.mc_item}>
          <div className={styles.image}>
            <Image src="/mc1.jpg" height={400} width={400} alt="no photo"/>
          </div>

          <div className={styles.info}></div>

          <div className={styles.profile}>
            <span>James Doe</span>
          </div>

          <div className={styles.rating}>
            <Rating
              onClick={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerMove={onPointerMove}
              rating={5}
              /* Available Props */
            />
          </div>
        </div>
        <div className={styles.mc_item}>
          <div className={styles.image}>
            <Image src="/mc4.jpg" height={400} width={400} alt="no photo" />
          </div>

          <div className={styles.info}></div>

          <div className={styles.profile}>
            <span>James Doe</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MCS;
