import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About the Resource Repository</h1>
      <p style={styles.text}>
        Welcome to the **ICS Resource Repository**, your one-stop destination for all academic resources at IIT Kanpur.  
        This initiative is designed to help students easily access previous year questions, assignments, and class notes  
        for various courses. With a user-friendly interface and seamless navigation, we aim to make learning **simpler and smarter**.
      </p>

      <h2 style={styles.subHeading}>📌 Why This Exists</h2>
      <p style={styles.text}>
        As students, we understand the struggle of finding reliable resources during exams.  
        This repository ensures that no student is left behind due to lack of study material.
      </p>

      <h2 style={styles.subHeading}>🚀 Features</h2>
      <ul style={styles.list}>
        <li>🔹 Easily browse courses and find resources.</li>
        <li>🔹 Access **PYQs, Assignments, Class Notes** in one place.</li>
        <li>🔹 Direct **Google Drive Links** for instant access.</li>
        <li>🔹 A clean, professional, and IITK-style **efficient UI**.</li>
      </ul>

      <h2 style={styles.subHeading}>👨‍💻 About the Developer</h2>
      <p style={styles.text}>
        This project is developed and maintained by **IITK students**, ensuring that it stays relevant and useful  
        for generations to come.  
        If you have any suggestions or want to contribute, feel free to reach out!
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
  subHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#444",
    marginTop: "20px",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#555",
  },
  list: {
    textAlign: "left",
    margin: "auto",
    maxWidth: "600px",
    fontSize: "1rem",
    color: "#555",
  },
};

export default About;
