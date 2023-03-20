import { useRouter } from "next/router";
import styles from "../styles/Featured.module.css";
import React, { useState } from "react";
import Image from "next/image";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Featured = () => {
  const router = useRouter();

  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [eventType, setEventsType] = useState("");

  const handleFilter = (event) => {
    event.preventDefault();

    console.log(price, location, date);

   
      router.push(
        `/eventslist?location=${location}&date=${date}&priceRange=${price}&eventType=${eventType}`
      );
   
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.featured_desc}>
          <h2>Experience More</h2>
          <h1>The Cheapest tickets on the internet, period.</h1>
          <span className={styles.featured_span}>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown
          </span>
        </div>
        <div className={styles.image}>
          <video src="/video.mp4" autoPlay muted loop />
        </div>
      </div>

      <div className={styles.search}>
        <div className={styles.search_item}>
          <div>
            <h3>Location</h3>
            <input
              type="text"
              placeholder="search location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.search_item}>
          <div>
            <h3>Date</h3>
            <input type="date" onChange={(e) => setDate(e.target.value)} />
          </div>
        </div>

        <div className={styles.search_item}>
          <div>
            <h3>Price</h3>
            <select onChange={(e) => setPrice(e.target.value)}>
              <option value="" disabled selected>
                All prices
              </option>
              <option value="0-500">$0 - $500</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000+">$1000+</option>
            </select>
          </div>
        </div>

        <div className={styles.search_item}>
          <div>
            <h3>Events </h3>
            <select onChange={(e) => setEventsType(e.target.value)}>
              <option value="" selected disabled>
                All types
              </option>
              <option value="Online">Online</option>
              <option value="Physical">Physical</option>
              <option value="Blended">Blended</option>
            </select>
          </div>
        </div>

        <button className={styles.events_button} onClick={handleFilter}>
          Find events
        </button>
      </div>
      <ToastContainer
        position="right-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Featured;
