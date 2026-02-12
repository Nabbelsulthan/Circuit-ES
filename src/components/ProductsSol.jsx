import "./ProductsSol.css";
import img1 from "../assets/products1.jpeg";
import img2 from "../assets/products2.png";

export default function ProductsSol() {
  return (
    <section className="products">

            {/* -------- SECTION TITLE -------- */}
      <h1 className="products-title">PRODUCTS & SOLUTIONS</h1>

      {/* -------- LT PANEL -------- */}
      <div className="product-card">


        <div className="product-text">
          
          <h2>LT PANEL (Low Tension Panel)</h2>

          <p>
            Our LT Panels are engineered and manufactured using
            high-quality components and robust enclosure designs.
            Suitable for industrial plants, commercial buildings,
            infrastructure projects, and utility applications.
          </p>

          <ul>
            <li>Main LT Panel</li>
            <li>LT Distribution Panel (LTDP)</li>
            <li>DG Synchronization Panel</li>
            <li>AMF Panel (Auto Mains Failure)</li>
          </ul>
        </div>

        <div className="product-image">
          <img src={img1} alt="LT Panel" />
        </div>
      </div>

      {/* -------- INDUSTRIAL CONTROL PANEL -------- */}
      <div className="product-card reverse">
        <div className="product-text">
          <h2>Industrial Control Panel (ICP)</h2>

          <p>
            Electrical Control Panels manage, protect, and automate
            electrical equipment such as motors, pumps, compressors,
            conveyors, and lighting systems.
          </p>

          <ul>
            <li>PCC Panel</li>
            <li>Motor Control Panel</li>
            <li>PLC Control Panel</li>
            <li>APFC Panel</li>
            <li>VFD / Drive Panel</li>
          </ul>
        </div>

        <div className="product-image">
          <img src={img2} alt="Industrial Control Panel" />
        </div>
      </div>

      {/* -------- INSTRUMENTATION -------- */}
      <div className="product-card single">
        <div className="product-text full">
          <h2>Instrumentation Products & Calibration</h2>

          <p>
            We provide precision instrumentation products along with
            professional calibration services to ensure accurate and
            reliable measurements.
          </p>

          <div className="product-columns">
            <div>
              <h3>Products</h3>
              <ul>
                <li>Sensors (temperature, pressure, flow, etc.)</li>
                <li>Transmitters</li>
                <li>Controllers</li>
              </ul>
            </div>

            <div>
              <h3>Benefits</h3>
              <ul>
                <li>High accuracy & efficiency</li>
                <li>Enhanced safety & compliance</li>
                <li>Reduced errors & downtime</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
