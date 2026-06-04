
import "./CESConnect.css";

import HeroSection from "./Connect/HeroSection";
import StatsCards from "./Connect/StatsCards";
import ProjectCard from "./Connect/ProjectCard";
import RecentUpdates from "./Connect/RecentUpdates";

export default function CESConnect() {

  const customer =
    localStorage.getItem("customer") || "Customer";

  const handleLogout = () => {
    localStorage.removeItem("customer");
    window.location.href = "/portal";
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

        <HeroSection />

        <StatsCards />

        <div className="dashboard-grid">

          <ProjectCard />

          <RecentUpdates />

        </div>

      </div>

    </div>
  );
}