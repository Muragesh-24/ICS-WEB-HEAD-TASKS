import React from "react";
import Aevent from "./Aevent";
import "./Aevent.css";

const eventList = [
  {
    title: "Mental Health Awareness Workshop",
    date: "April 10, 2025",
    description: "Join us for a session on mindfulness and stress management.",
    image: "event1.jpg"
  },
  {
    title: "Therapy & Well-being Talk",
    date: "April 15, 2025",
    description: "Learn about different therapy techniques and self-care routines.",
    image: "event2.jpg"
  },
  {
    title: "Counseling Open Session",
    date: "April 20, 2025",
    description: "A safe space for open discussions on mental health concerns.",
    image: "event3.jpg"
  }
];

const Events = () => {
  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <div className="events-grid">
        {eventList.map((event, index) => (
          <Aevent
            key={index}
            title={event.title}
            date={event.date}
            description={event.description}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
