
// import "./CESConnect.css";

// // import HeroSection from "./Connect/HeroSection";
// import StatsCards from "./Connect/StatsCards";
// import ProjectCard from "./Connect/ProjectCard";
// import RecentUpdates from "./Connect/RecentUpdates";
// import CustomerBanner from "./Connect/CustomerBanner";
// import ProjectDetails from "./Connect/ProjectDetails";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";


// export default function CESConnect() {
// const navigate = useNavigate();



//   const customer =
//     localStorage.getItem("customer") || "Customer";

//   const handleLogout = () => {
//   localStorage.removeItem("customer");
//   navigate("/portal", { replace: true });
// };
//   return (
//     <div className="ces-connect">

//       <div className="ces-container">

//         <div className="dashboard-header">

//           <div>
//             <h2 className="welcome-title">
//               Welcome Back, {customer}
//             </h2>

//             <p className="welcome-subtitle">
//               Monitor your projects and documents.
//             </p>
//           </div>

//           <button
//             className="logout-btn"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>

//         </div>

//         <CustomerBanner />

//         {/* <HeroSection /> */}


// <ProjectDetails />

//         <StatsCards />

//         <div className="dashboard-grid">

//           <ProjectCard />

//           <RecentUpdates />

//         </div>

//       </div>

//     </div>
//   );
// }



import "./CESConnect.css";

import StatsCards from "./Connect/StatsCards";
import ProjectCard from "./Connect/ProjectCard";
import RecentUpdates from "./Connect/RecentUpdates";
import CustomerBanner from "./Connect/CustomerBanner";
import ProjectDetails from "./Connect/ProjectDetails";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function CESConnect() {
  const navigate = useNavigate();

  useEffect(() => {
    const customer = localStorage.getItem("customer");

    if (!customer) {
      navigate("/portal", { replace: true });
    }
  }, [navigate]);

  const customer =
    localStorage.getItem("customer") || "Customer";

  const handleLogout = () => {
    localStorage.removeItem("customer");
    navigate("/portal", { replace: true });
  };

  return (
    <div className="ces-connect">

      <div className="ces-container">

        <div className="dashboard-header">

          <div>
            <h2 className="welcome-title">
              Welcome Back, {customer}
            </h2>

            <p className="welcome-subtitle">
              Monitor your projects and documents.
            </p>
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

        <CustomerBanner />

        <ProjectDetails />

        <StatsCards />

        <div className="dashboard-grid">

          <ProjectCard />

          <RecentUpdates />

        </div>

      </div>

    </div>
  );
}