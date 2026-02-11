// import "./Vision.css";
// import visionImg from "../assets/vision.png";

// export default function Vision() {
//   return (
//     <section className="vision">
      
//       {/* CONTENT */}
//       <div className="vision-content">
//         <p>VISION</p>
//         <span>
//           To become a trusted supplier of electrical and electronic products for
//           domestic and commercial applications.
//         </span>

//         <p>MISSION</p>
//         <ul>
//           <li>Deliver effective, customer-focused electrical solutions.</li>
//           <li>Be a preferred supplier of power systems and components.</li>
//           <li>
//             Design and supply cost-effective, high-quality products through
//             collaboration with employees and suppliers.
//           </li>
//         </ul>

//         <p>OUR VALUES</p>
//         <ul>
//           <li><strong>Innovation:</strong> Forward-thinking ideas with strong execution</li>
//           <li><strong>Passion:</strong> Commitment and enthusiasm to succeed</li>
//           <li><strong>Quality:</strong> Products and services we proudly stand behind</li>
//           <li><strong>Thrive:</strong> Growth that contributes to our customers’ success</li>
//         </ul>
//       </div>

//       {/* IMAGE */}
//       <div className="vision-image">
//         <img src={visionImg} alt="Vision" />
//       </div>



      

//     </section>
//   );
// }



import "./Vision.css";
import visionImg from "../assets/vision.png";

export default function Vision() {
  return (
    <section className="vision-section">
      {/* MAIN HEADING */}
      <h1 className="vision-title">VISION</h1>

      <div className="vision">
        {/* CONTENT */}
        <div className="vision-content fade-left">
          <h2>Our Vision</h2>
          <p>
            To become a trusted supplier of electrical and electronic products
            for domestic and commercial applications.
          </p>

          <h2>Our Mission</h2>
          <ul>
            <li>Deliver effective, customer-focused electrical solutions</li>
            <li>Be a preferred supplier of power systems and components</li>
            <li>
              Design and supply cost-effective, high-quality products through
              collaboration with employees and suppliers
            </li>
          </ul>

          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Innovation:</strong> Forward-thinking ideas with strong
              execution
            </li>
            <li>
              <strong>Passion:</strong> Commitment and enthusiasm to succeed
            </li>
            <li>
              <strong>Quality:</strong> Products and services we proudly stand
              behind
            </li>
            <li>
              <strong>Thrive:</strong> Growth that contributes to our customers’
              success
            </li>
          </ul>
        </div>

        {/* IMAGE */}
        <div className="vision-image fade-right">
          <img src={visionImg} alt="Company Vision" />
        </div>
      </div>
    </section>
  );
}
