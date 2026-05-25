


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

          {/* <h1 className="hero-title">
            Industrial Control Panel & Electrical Enclosure Manufacturers in Hosur
          </h1> */}

          <p className="hero-subtitle">
            Powering industries with intelligent electrical and energy systems
            built for reliability, efficiency, and the future.
          </p>

          {/* <p className="hero-subtitle">
  Circuits Energy System delivers PCC, MCC, PLC, APFC and VFD panel
  manufacturing solutions for industries across Tamil Nadu and Karnataka.
</p> */}

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
           

                <p>info@circuitses.com</p>
                {/* <a
                  href="https://www.circuitses.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.circuitses.com
                </a> */}
           
            </div>

            <div className="info-card">
              <span>CALL US</span>
              <p>+91 80-72127505</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={heroImg} alt="Industrial electrical control panel manufacturing at CircuitsES Hosur" />
        </div>
      </div>

      <br />

      <br />

      <Enquiry />
    </section>
  );
};

export default Hero;

