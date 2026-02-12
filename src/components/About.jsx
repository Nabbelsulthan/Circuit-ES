
import "./About.css";
import about from "../assets/about.png";

import Vision from "./Vision";
// import Mission from "./Mission";

export default function About() {
  return (
    <section className="about">
      <h1 className="about-title">ABOUT US</h1>

      <div className="about-content">
        {/* IMAGE */}
        <div className="about-image-wrapper">
          <img className="about-img" src={about} alt="About CircuitsES" />
        </div>

        {/* TEXT */}
        <div className="about-text">
          <h2>A Brief Story About the Company</h2>
          <p>
            Founded in 2024, CircuitsES specializes in manufacturing and supplying
            electrical and electronic systems for industries, institutions, and
            domestic buildings. We continuously expand our product range to meet
            customer needs with quality, reliability, and long-term satisfaction.
          </p>

          <h2>Our Message</h2>
          <p>
            We believe in building strong partnerships with customers, suppliers,
            and employees. Flexibility, passion, and a challenging mindset drive
            our commitment to excellence and innovation.
          </p>
        </div>
      </div>

      <Vision/>

    {/* <Mission/> */}
    </section>

    
  );
}

