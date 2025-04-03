import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CoursePage from "./pages/CoursePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/course/:courseCode" element={<CoursePage />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

