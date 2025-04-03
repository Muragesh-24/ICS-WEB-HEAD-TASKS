import React from "react";
import "./Aarticle.css"; // Import styles

const Aarticle = ({ title, date, summary, image }) => {
  return (
    <div className="article-card">
      <img src={image} alt={title} className="article-image" />
      <h3>{title}</h3>
      <p className="article-date">{date}</p>
      <p className="article-summary">{summary}</p>
    </div>
  );
};

export default Aarticle;
