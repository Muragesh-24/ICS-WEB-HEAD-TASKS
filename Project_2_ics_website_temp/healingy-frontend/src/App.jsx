import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";
import Events from "./Components/Events"; // Import Events Component
import Mainpage from "./Components/Mainpage";
import Articles from "./Components/Articles";
import Feedbacks from "./Components/Feedback";

function App() {
  return (
    <Router>
      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">IITK MindCare</h1>
          <div className="nav-links">
            <Link to="/" className="nav-button">Home</Link>
            <Link to="/articles" className="nav-button">Articles</Link>
            <Link to="/events" className="nav-button">Events</Link>
            <Link to="/feedbacks" className="nav-button">Feedbacks</Link>
          </div>
        </nav>

        
        <Routes>
          <Route path="/" element={<Mainpage/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/feedbacks" element={<Feedbacks/>} />
        </Routes>
        <footer className="navbar">
          <div className="footer-container">
            <div className="footer-logo">
              <h2>IITK MindCare</h2>
              <p>Your well-being, <br />our priority.</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3> 
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} IITK MindCare. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
