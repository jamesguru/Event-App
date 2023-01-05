import React,{useState} from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import Link from "next/link";
const Featured = () => {

  
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
          <video
            src="/video.mp4"
            
            autoPlay
            muted
            loop
           
          />
        </div>
      </div>

      <div className={styles.search}>
        <div className={styles.search_item}>
          <div>
            <h3>Location</h3>
            <input type="text" placeholder="search location" />
          </div>
        </div>
        <div className={styles.search_item}>
          <div>
            <h3>Date</h3>
            <input type="date" />
          </div>
        </div>

        <div className={styles.search_item}>
          <div>
            <h3>Price</h3>
            <input type="number" placeholder="ksh" />
          </div>
        </div>
        <div className={styles.search_item}>
          <div>
            <h3>Tickets Type</h3>
            <select name="" id="">
                <option value="">select</option>
                <option value="">Type 1</option>
                <option value="">Type 2</option>
                <option value="">Type 3</option>
                <option value="">Type 4</option>

            </select>
          </div>
        </div>
        <Link href="/eventslist">
          <button>Find events</button>
        </Link>
        
      </div>


    </div>
  );
};

export default Featured;
