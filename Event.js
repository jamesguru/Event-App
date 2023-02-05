import React, { useState } from 'react';
import axios from 'axios';

const Home = ({ events }) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [filters, setFilters] = useState({
    date: '',
    location: '',
    priceRange: '',
    eventType: ''
  });

  useEffect(() => {
    if (Object.values(filters).every(filter => !filter)) {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => {
        return (
          (filters.date ? event.date === filters.date : true) &&
          (filters.location ? event.location === filters.location : true) &&
          (filters.priceRange ?
            (filters.priceRange === '0-500' ?
              event.price >= 0 && event.price <= 500 :
              filters.priceRange === '500-1000' ?
                event.price >= 500 && event.price <= 1000 :
                filters.priceRange === '1000+' ?
                  event.price >= 1000 :
                  true)
            : true) &&
          (filters.eventType ? event.eventType === filters.eventType : true)
        );
      }));
    }
  }, [events, filters]);

  return (
    <div>
      <form>
        {/* Render other filters here */}
        <select value={filters.priceRange} onChange={e => setFilters({ ...filters, priceRange: e.target.value })}>
          <option value="">All prices</option>
          <option value="0-500">$0 - $500</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000+">$1000+</option>
        </select>
        <select value={filters.eventType} onChange={e => setFilters({ ...filters, eventType: e.target.value })}>
          <option value="">All types</option>
          <option value="Online">Online</option>
          <option value="Physical">Physical</option>
          <option value="Blended">Blended</option>
        </select>
      </form>
      <ul>
        {filteredEvents.map(event => (
          <li key={event.id}>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Price: {event.price}</p>
            <p>Type: {event.eventType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.getInitialProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/events');
  return { events: data };
};

export default Home;
