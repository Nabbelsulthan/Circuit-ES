import "./ServiceSol.css";
import ServiceImg from "../assets/service.png";

export default function ServiceSol() {
  return (
    <section className="services">

      {/* TITLE */}
      <h2 className="services-title">SERVICES</h2>

      {/* IMAGE */}
      <div className="services-image">
        <img src={ServiceImg} alt="service-img" />
      </div>

      {/* CONTENT GRID */}
      <div className="services-grid">

        {/* LEFT COLUMN */}
        <div className="services-col">
          <h3>ENCLOSURE SOLUTIONS</h3>
          <p>
            CircuitsES provides a wide range of high-quality enclosures—from
            industrial to fully customized solutions—designed for secure indoor
            and weatherproof outdoor applications.
          </p>

          <h4>Types of Enclosures</h4>
          <ul>
            <li>Industrial enclosures</li>
            <li>Electrical enclosures</li>
            <li>Outdoor enclosures</li>
            <li>Modular enclosures</li>
            <li>Custom-built enclosures</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="services-col">
          <h4>Services</h4>
          <ul>
            <li>Product design & development</li>
            <li>Manufacture and Supply</li>
            <li>Prototyping and testing</li>
            <li>CAD modeling & simulations</li>
          </ul>

          <h4>Industries Served</h4>
          <ul>
            <li>Manufacturing</li>
            <li>Energy & Utilities</li>
            <li>Telecommunications</li>
            <li>Transportation</li>
            <li>Automotive</li>
          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <hr />

      {/* WHY US */}
      <div className="services-why">
        <h4>Why Us</h4>
        <ul>
          <li>Experienced engineers and designers</li>
          <li>Strong focus on quality and innovation</li>
          <li>Proven project success and client satisfaction</li>
        </ul>
      </div>

    </section>
  );
}
