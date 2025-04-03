import { useState, useEffect } from "react";
import CourseCard from "../Components/CourseCard.jsx";
import "../index.css";

const courses = [
  "MTH111", "MTH112", "MTH113", "MTH114",
  "PHY111", "PHY112", "PHY113", "PHY114", "PHY115",
  "CHM111", "CHM112", "CHM113",
  "TA111", "LIF111", "ELC111", "ELC112", "ELC113",
  "ESC111", "ESC112", "ESC113"
];

const LandingPage = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark-mode", savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const currentMode = localStorage.getItem("darkMode") === "true";
    localStorage.setItem("darkMode", !currentMode);
    document.body.classList.toggle("dark-mode", !currentMode);
  };

  const filteredCourses = courses.filter(course =>
    course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <nav className="navbar">
        <h1> Every Resource You Need, All in One Place</h1>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {localStorage.getItem("darkMode") === "true" ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      <input
        type="text"
        placeholder="Search for a course..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="course-grid">
        {filteredCourses.map((courseCode) => (
          <CourseCard key={courseCode} course={{ code: courseCode }} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
