import React from "react";
import "./Aevent.css"; // Import styles

const Aevent = ({ title, date, description, image }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <h3>{title}</h3>
      <p className="event-date">{date}</p>
      <p className="event-description">{description}</p>
    </div>
  );
};

export default Aevent;
