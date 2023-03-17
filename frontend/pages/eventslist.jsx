import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import styles from "../styles/EventsList.module.css";
import { useRouter } from "next/router";
import { Events } from "../../data";
import Moment from "react-moment";
import Link from "next/link";

const EventsList = () => {
  const router = useRouter();
  const { location, date, priceRange, eventType } = router.query;
  const [filteredEvents, setFilteredEvents] = useState(Events);
  const [filters, setFilters] = useState({
    date: date,
    location: location,
    priceRange: priceRange,
    eventType: eventType,
  });

  console.log(filteredEvents);

  useEffect(() => {
    if (Object.values(filters).every((filter) => !filter)) {
      setFilteredEvents(Events);
    } else {
      setFilteredEvents(
        Events.filter((event) => {
          return (
            (filters.date ? event.date === filters.date : true) &&
            (filters.location ? event.location === filters.location : true) &&
            (filters.priceRange
              ? filters.priceRange === "0-500"
                ? event.price >= 0 && event.price <= 500
                : filters.priceRange === "500-1000"
                ? event.price >= 500 && event.price <= 1000
                : filters.priceRange === "1000+"
                ? event.price >= 1000
                : true
              : true) &&
            (filters.eventType ? event.eventType === filters.eventType : true)
          );
        })
      );
    }
  }, [Events, filters]);

  return (
    <div>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2>Find Events</h2>

          <div className={styles.search}>
            <label htmlFor="">Location</label>
            <input
              type="text"
              value={filters.location}
              placeholder="Mombasa"
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
            />
            <label htmlFor="">Date</label>
            <input
              type="date"
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            />
            <label htmlFor="">Event Type</label>
            <select
              value={filters.eventType}
              onChange={(e) =>
                setFilters({ ...filters, eventType: e.target.value })
              }
            >
              <option value="">All types</option>
              <option value="Online">Online</option>
              <option value="Physical">Physical</option>
              <option value="Blended">Blended</option>
            </select>
            <label htmlFor="">Price Range</label>
            <select
              value={filters.priceRange}
              onChange={(e) =>
                setFilters({ ...filters, priceRange: e.target.value })
              }
            >
              <option value="">All prices</option>
              <option value="0-500">$0 - $500</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000+">$1000+</option>
            </select>
          </div>
        </div>
        <div className={styles.mainbar}>
          {filteredEvents.map((event) => 
          <>
          <Link href={`eventdetailed`}>
          
          <div className={styles.event_item}>
            <img src={event.img} alt="event image" className={styles.event_image} />
            <div className={styles.event_detail}>
              <h2>Codris Africa event</h2>

              <button>ksh {event.price}</button>
              <span>Location: {event.location}</span>
            </div>

            <div className={styles.event_detail}>
              <span>Date :  {<Moment date={event.date} format="ddd MMM D YYYY" />}</span>

              <span>Capacity: 200 people</span>

              <span>Ticket: Required</span>

              <span>Place: {event.eventType}</span>
            </div>
          </div>
          
          </Link>

          <hr />
          
          
          </>
          
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsList;
