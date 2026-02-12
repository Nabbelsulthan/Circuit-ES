import "./Infrastructure.css";

import infra1 from "../assets/infra1.jpeg";
import infra2 from "../assets/infra2.jpeg";
import infra3 from "../assets/infra3.jpeg";



export default function Infrastructure() {
  return (
    <section className="infra-section">
      <div className="infra-container">

        <h1 className="infra-title">Infrastructure</h1>

        <div className="infra-cards">

          {/* ================= OUR FACILITY CARD ================= */}
          <div className="infra-card">
            <img src={infra1} alt="Facility" />

            <div className="infra-card-body">
              <h2>Our Facility</h2>

              <p>
                Our facility is strategically designed to support efficient
                manufacturing, assembly, and testing of electrical panels
                and automation systems.
              </p>

              <ul>
                <li>Modern fabrication tools and precision machinery</li>
                <li>Dedicated LT, Control, APFC & Synchronization panel assembly</li>
                <li>In-house testing and quality inspection zone</li>
                <li>Safe material handling & organized storage systems</li>
                <li>Scalable infrastructure for customized & bulk projects</li>
              </ul>

              <p>
                We maintain a clean, safety-focused environment that ensures
                reliable, high-performance solutions delivered on time.
              </p>
            </div>
          </div>

          {/* ================= FABRICATION UNIT CARD ================= */}
          <div className="infra-card">
            <img src={infra2} alt="Fabrication Unit" />

            <div className="infra-card-body">
              <h2>Fabrication Unit</h2>

              <p>
                Our fabrication unit for electrical panel boards is equipped
                to deliver precise and durable structures.
              </p>

              <p>
                We ensure accurate cutting, bending, and assembly for
                reliable panel fabrication.
              </p>

              <p>
                Designed for quality and safety, the unit meets industrial
                standards and project requirements.
              </p>
            </div>
          </div>

          {/* ================= SHOP FLOOR CARD ================= */}
          <div className="infra-card">
            <img src={infra3} alt="Shop Floor" />

            <div className="infra-card-body">
              <h2>Shop Floor</h2>

              <p>
                Our in-house manufacturing unit is well equipped with
                state-of-the-art facilities, a separate tool room and design studio.
              </p>

              <p>
                We are thoroughly involved in designing, engineering and
                manufacturing laser-cut parts & fabricated assemblies
                for various industrial sectors.
              </p>
            </div>
          </div>

        </div>

        {/* ================= NOTE CARD ================= */}
        <div className="infra-note-card">
          <h3>Note*</h3>
          <p>
            MR Enterprises is a sister concern of Circuits Energy System Private Limited,
            established to complement and strengthen the group's overall capabilities.
            Together, the companies leverage shared knowledge, resources, and industry
            experience to deliver consistent value and trusted solutions.
          </p>
        </div>

      </div>
    </section>
  );
}
