import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/Eventdetailed.module.css";
import { FaLocationArrow, FaGamepad,FaCalendar } from "react-icons/fa";
import Table from "react-bootstrap/Table";


import 'bootstrap/dist/css/bootstrap.css'

const eventdetailed = () => {
  return (
    <div className={styles.wrapper}>
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
              <FaLocationArrow className={styles.icons} /> Karen,Nairobi
            </span>

            <span>
              <FaGamepad className={styles.icons} /> Online
            </span>
            <span>
              <FaCalendar className={styles.icons} /> Fri 11 April 2023
            </span>
          </div>

          <div className={styles.reminder}>
            <button>Set Reminder</button>
          </div>

          <div className={styles.schedule}>
            <h3>Event schedule</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Event Times</th>
                  <th >Activity</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10:00 am - 12:00 pm</td>
                  <td>Mark</td>
                  
                </tr>
                <tr>
                <td>12:00 pm - 2:00 pm</td>
                  <td>Jacob</td>
                 
                </tr>
                <tr>
                <td> 2:00 pm - 4:00 pm</td>
                  <td >Larry the Bird</td>
                  
                </tr>
              </tbody>
            </Table>
          </div>

          <div className={styles.schedule}>
            <h3>Inclusions & Exclusions</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Inclusions</th>
                  <th >Exclusions</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Meals & drinks</td>
                  <td>Luggages</td>
                  
                </tr>
                <tr>
                <td>DJ JOE MFALME</td>
                  <td>Drugs</td>
                 
                </tr>
                <tr>
                <td>Anything considered weapon</td>
                  <td >Tickets</td>
                  
                </tr>
              </tbody>
            </Table>
          </div>

          <div className={styles.bottom_detail}>
            <h3>Overview</h3>
            <span>
              KenyaBuzz Events. Live music, craft fairs, theatre, sports and
              more; there's always something to do in Nairobi and around the
              country.
            </span>
          </div>

          <div className={styles.media}>
            <h2>Events photos and videos</h2>

            <video src="/video.mp4" controls muted loop />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default eventdetailed;
