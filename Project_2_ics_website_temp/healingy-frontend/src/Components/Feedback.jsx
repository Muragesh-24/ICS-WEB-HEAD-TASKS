import React, { useState, useEffect } from "react";
import Afeedback from "./Afeedback";
import "./Afeedback.css";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState({ name: "", feedback: "" });

  // Fetch feedbacks from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/feedbacks")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error("Error fetching feedbacks:", err));
  }, []);

  const handleChange = (e) => {
    setNewFeedback({ ...newFeedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newFeedback.name && newFeedback.feedback) {
      try {
        const res = await fetch("http://localhost:5000/api/feedbacks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newFeedback),
        });

        const data = await res.json();
        setFeedbacks([data, ...feedbacks]); // Add new feedback to UI
        setNewFeedback({ name: "", feedback: "" });
      } catch (err) {
        console.error("Error submitting feedback:", err);
      }
    }
  };

  return (
    <div className="feedback-container">
      <h2>Share Your Feedback</h2>

      {/* Feedback Form */}
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newFeedback.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="feedback"
          placeholder="Write your feedback..."
          value={newFeedback.feedback}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h2>What People Say</h2>
      <div className="feedback-grid">
        {feedbacks.map((feedback, index) => (
          <Afeedback key={index} {...feedback} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
