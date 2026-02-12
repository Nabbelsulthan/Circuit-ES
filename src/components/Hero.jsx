


import "./Hero.css";
// import heroImg from "../assets/img1.jpeg";
import heroImg from "../assets/hero-img.jpeg";
import Enquiry from "./Enquiry";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1 className="hero-title">
            Electrical Solutions <span>Never Before</span>
          </h1>

          <p className="hero-subtitle">
            Powering industries with intelligent electrical and energy systems
            built for reliability, efficiency, and the future.
          </p>

          <div className="hero-actions">
            <a href="/about" className="hero-btn primary">
              Explore More
            </a>
            <a href="/contact" className="hero-btn secondary">
              Contact Us
            </a>
          </div>

          {/* INFO CARDS */}
          <div className="hero-info">
            <div className="info-card">
              <span>E-mail</span>
              <p>

                <p>info@circuitses.com</p>
                {/* <a
                  href="https://www.circuitses.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.circuitses.com
                </a> */}
              </p>
            </div>

            <div className="info-card">
              <span>CALL US</span>
              <p>+91 80-72127505</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={heroImg} alt="Electrical Engineering Solutions" />
        </div>
      </div>

      <br/>

       <br/>

      <Enquiry/>
    </section>
  );
};

export default Hero;

