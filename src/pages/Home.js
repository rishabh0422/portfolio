import imgsrc from '../images/rishabh2.webp';
import React from "react";
import "../index.css"; 
import Button from '../component/Button'
const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span className="name-highlight">Rishabh</span>
        </h1>
        <h2>Web Designer</h2>
        <Button>Get Resume</Button>
        <div className="social-icons">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-behance"></i>
          <i className="fab fa-github"></i>
        </div>
      </div>
      <div className="home-image">
        <img src={imgsrc} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
