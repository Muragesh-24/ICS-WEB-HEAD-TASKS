import React from "react";
import Aarticle from "./Aarticle";
import "./Aarticle.css";

const articleList = [
  {
    title: "The Importance of Mental Health",
    date: "March 10, 2025",
    summary: "Understanding why mental health is crucial for overall well-being.",
    image: "article1.jpg"
  },
  {
    title: "How to Manage Stress Effectively",
    date: "March 15, 2025",
    summary: "Learn proven techniques to reduce stress and improve focus.",
    image: "article2.jpg"
  },
  {
    title: "The Power of Meditation",
    date: "March 20, 2025",
    summary: "Discover how meditation can help you achieve mental clarity.",
    image: "article3.jpg"
  }
];

const Articles = () => {
  return (
    <div className="articles-container">
      <h2>Latest Articles</h2>
      <div className="articles-grid">
        {articleList.map((article, index) => (
          <Aarticle
            key={index}
            title={article.title}
            date={article.date}
            summary={article.summary}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
