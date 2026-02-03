import "./Hero.css";
import logo from "../assets/circuitES1-logo.png";
import heroImg from "../assets/img1.jpeg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <img src={logo} alt="CircuitsES" className="hero-logo" />

          <h1>
            Electrical Solutions <span>Never Before</span>
          </h1>

          <p className="hero-subtitle">
            Powering industries with intelligent electrical and energy systems.
          </p>

          <div className="hero-info">
            <div className="info-card">
              <span>MORE INFO</span>
              <p>www.circuitses.com</p>
            </div>

            <div className="info-card">
              <span>CALL US</span>
              <p>+91 80-72127505</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={heroImg} alt="Engineering Work" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
