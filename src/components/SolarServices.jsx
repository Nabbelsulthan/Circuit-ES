import "./SolarServices.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

export default function SolarServices() {
  return (
    <section className="solar">

      <div className="solar-header">
        <h1>SOLAR SERVICES</h1>
        <p>
          We provide end-to-end solar rooftop solutions designed to deliver
          maximum efficiency, long-term savings, and reliable performance
          across residential, commercial, industrial, and institutional sectors.
        </p>
      </div>

      <div className="solar-grid">

        {/* Residential */}
        <div className="solar-card fade-up">
          <div className="solar-image">
            <img src={s1} alt="Residential Solar" />
          </div>
          <div className="solar-content">
            <h2>RESIDENTIAL</h2>
            <p>
              Affordable and reliable rooftop solar solutions for homes.
              Our systems help homeowners adopt clean energy, reduce
              electricity expenses, and increase property value through
              long-term energy savings.
            </p>
          </div>
        </div>

        {/* Commercial & Industrial */}
        <div className="solar-card fade-up">
          <div className="solar-image">
            <img src={s2} alt="Commercial Solar" />
          </div>
          <div className="solar-content">
            <h2>COMMERCIAL & INDUSTRIAL</h2>
            <p>
              Designed to optimize unused roof space and deliver consistent
              returns on investment. We provide customized solar solutions
              based on your energy requirements for efficient and sustainable
              power generation.
            </p>
          </div>
        </div>

        {/* Institutional */}
        <div className="solar-card fade-up">
          <div className="solar-image">
            <img src={s3} alt="Institutional Solar" />
          </div>
          <div className="solar-content">
            <h2>INSTITUTIONAL</h2>
            <p>
              Cost-effective rooftop solar systems for educational institutions,
              research facilities, and non-profit organizations. Our solutions
              support energy efficiency, sustainability, and long-term savings.
            </p>
          </div>
        </div>

      </div>

      {/* AMC Section */}
      <div className="solar-amc fade-up">
        <h2>AMC – ANNUAL MAINTENANCE CONTRACT</h2>
        <p>
          Our Annual Maintenance Contract services ensure your solar system
          operates at peak performance throughout its lifecycle. With regular
          inspections, preventive maintenance, and expert monitoring, we
          maximize energy output, extend system life, and protect your
          investment.
        </p>
      </div>

    </section>
  );
}
