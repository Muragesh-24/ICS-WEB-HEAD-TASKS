import React from "react";
import "./Afeedback.css";
import { formatDistanceToNow } from "date-fns";

const Afeedback = ({ name, date, feedback }) => {
  return (
    <div className="feedback-card">
      <h3>{name}</h3>
      <p className="feedback-date">{formatDistanceToNow(new Date(date), { addSuffix: true })}</p>
      <p className="feedback-text">"{feedback}"</p>
    </div>
  );
};

export default Afeedback;
