import React from 'react'
import "../styles.css"; // Ensure you have styles for events
function Mainpage() {
  return (
    <div className='tha'>
      {/* Hero Section */}
<header className="hero">
  <div className="hero-left">
    <img src="OIP.jpg" alt="Therapy session" className="hero-img" />
  </div>
  <div className="hero-right">
    <h2>Take the First Step Towards a Balanced & Fulfilling Life.</h2>
    <p>Your mental health is our priority. Book an appointment today.</p>
    <button className="hero-button" onClick={() => alert("Booking Page Coming Soon!")}>
      Book a Session
    </button>
  </div>
</header>

{/* Services Section */}
<section className="services">
  <h2 className="section-title">Our Services</h2>
  <div className="services-grid">
    <div className="service-card">
      <img src="A.jpg" alt="Individual Therapy" />
      <h3>Individual Therapy</h3>
      <p>Personalized sessions to help you navigate life’s challenges.</p>
    </div>
    <div className="service-card">
      <img src="C.jpg" alt="Deaddiction Therapy" />
      <h3>Deaddiction</h3>
      <p>Overcome challenges and build a healthier future with professional support.</p>
    </div>
    <div className="service-card">
      <img src="B.jpg" alt="Group Therapy" />
      <h3>Group Therapy</h3>
      <p>Join a supportive community and heal together through shared experiences.</p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Mainpage
