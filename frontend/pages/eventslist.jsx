import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import styles from "../styles/EventsList.module.css";

const EventsList = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.sidebar}>
         
         <h2>Search</h2>

         <div className={styles.search}>
            
            <label htmlFor="">Location</label>
            <input type="text" />
            <label htmlFor="">Date</label>
            <input type="date" />
            <label htmlFor="">Price</label>
            <input type="number" />

            <label htmlFor="">Ticket Type</label>
            <select name="" id="">
                <option value="">Tickets Type</option>
                <option value="">Ticket 1</option>
                <option value="">Tickets 2</option>
                <option value="">Ticket 3</option>
            </select>


            <button>Search</button>
         </div>
        </div>
        <div className={styles.mainbar}>

            <div className={styles.event_item}>

                <img src="/Featured.jpg" alt="" height={200} width={200}/>
                <div className={styles.event_detail}>

                    <h2>Codris Africa event</h2>

                    <button>ksh 500</button>
                    <span>Location: Nairobi</span>

                </div>

                <div className={styles.event_detail}>

                    <span>Date : 2022-12-01</span>

                    <span>Capacity: 200 people</span>

                    <span>Ticket: Required</span>

                </div>

            </div>

            <hr />

            <div className={styles.event_item}>

                <img src="/Featured.jpg" alt="" height={200} width={200}/>
                <div className={styles.event_detail}>

                    <h2>Codris Africa event</h2>

                    <button>ksh 500</button>
                    <span>Location: Nairobi</span>

                </div>

                <div className={styles.event_detail}>

                    <span>Date : 2022-12-01</span>

                    <span>Capacity: 200 people</span>

                    <span>Ticket: Required</span>

                </div>

            </div>

            <hr />

            <div className={styles.event_item}>

                <img src="/Featured.jpg" alt="" height={200} width={200}/>
                <div className={styles.event_detail}>

                    <h2>Codris Africa event</h2>

                    <button>ksh 500</button>
                    <span>Location: Nairobi</span>

                </div>

                <div className={styles.event_detail}>

                    <span>Date : 2022-12-01</span>

                    <span>Capacity: 200 people</span>

                    <span>Ticket: Required</span>

                </div>

            </div>

            <hr />

            <div className={styles.event_item}>

                <img src="/Featured.jpg" alt="" height={200} width={200}/>
                <div className={styles.event_detail}>

                    <h2>Codris Africa event</h2>

                    <button>ksh 500</button>
                    <span>Location: Nairobi</span>

                </div>

                <div className={styles.event_detail}>

                    <span>Date : 2022-12-01</span>

                    <span>Capacity: 200 people</span>

                    <span>Ticket: Required</span>

                </div>

            </div>

            <hr />
            <div className={styles.event_item}>

                <img src="/Featured.jpg" alt="" height={200} width={200}/>
                <div className={styles.event_detail}>

                    <h2>Codris Africa event</h2>

                    <button>ksh 500</button>
                    <span>Location: Nairobi</span>

                </div>

                <div className={styles.event_detail}>

                    <span>Date : 2022-12-01</span>

                    <span>Capacity: 200 people</span>

                    <span>Ticket: Required</span>

                </div>

            </div>

            <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsList;
