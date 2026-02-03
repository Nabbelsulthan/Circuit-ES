import "./Mission.css";
import MissionImg from "../assets/mission.png";
import MissionImg1 from "../assets/mission1.png";

export default function Mission() {
  return (
    <section className="mission">

      {/* TOP BLOCK */}
      <div className="mission-block">
        <div className="mission-text">
          <p className="mission-title">
            ERSM 8th Gen. Automatic PU Gasket Machine
          </p>

          <ul className="mission-points">
            <li>
              FIPFG-E530 is a high-precision Foam Gasket machine supporting gasket
              width of 5–30 mm with a working stroke of 2250 × 1250 × 200 mm.
            </li>
            <li>
              Featuring three-axis control and CAD programming, it replaces
              manual adhesive processes and delivers reliable waterproofing,
              dust sealing, and noise reduction with stable performance.
            </li>
          </ul>
        </div>

        <div className="mission-image">
          <img src={MissionImg} alt="Mission machine" />
        </div>
      </div>

      {/* APPLICATIONS BLOCK */}
      <div className="mission-block reverse">
        <div className="mission-text">
          <p className="mission-subtitle">Product Application</p>

          <span>
            The FIPFG-E530 is widely used for precision sealing applications
            requiring waterproofing, dust protection, and noise reduction. It
            is ideal for:
          </span>

          <ul className="mission-applications">
            <li>Electrical & electronic enclosures</li>
            <li>Sheet metal cabinets and panels</li>
            <li>Automotive components and housings</li>
            <li>EV battery packs and control units</li>
            <li>Lighting fixtures and outdoor equipment</li>
            <li>Industrial control panels and junction boxes</li>
          </ul>
        </div>

        <div className="mission-image small">
          <img src={MissionImg1} alt="Mission applications" />
        </div>
      </div>

    </section>
  );
}
