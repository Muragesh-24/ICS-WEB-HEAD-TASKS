import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CoursePage.css"; 

const CoursePage = () => {
  const { courseCode } = useParams();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );


  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

 
  const sections = [
    { name: "AM Slides", link: "https://drive.google.com/drive/u/0/folders/1j4dCrFtSZm5xKi2GNJ8GrfBTMmFNDNWv" },
    { name: "Practice Problems", link: "https://drive.google.com/drive/u/0/folders/1Qmq72jdU0XGredBB7BWt6R78v505IoOt" },
    { name: "PYQs", link: "https://drive.google.com/drive/u/0/folders/1METHbwFQDwTA25OL-siINE0A727GXFIV" },
    { name: "Other Resources", link: "https://drive.google.com/your-link-4" },
    { name: "Upcoming Feature", link: "#" },
  ];

  return (
    <div className={`course-container ${darkMode ? "dark" : "light"}`}>
      <div className="header">
        <h1>{courseCode} - Course Resources</h1>
      </div>

      <div className="course-sections">
        {sections.map((section, index) => (
          <a
            key={index}
            href={section.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`course-card ${section.link === "#" ? "disabled" : ""}`}
          >
            <span>{section.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
