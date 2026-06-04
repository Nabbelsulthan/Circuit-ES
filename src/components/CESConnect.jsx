import "./CESConnect.css";

import HeroSection from "./Connect/HeroSection";
import StatsCards from "./Connect/StatsCards";
import ProjectCard from "./Connect/ProjectCard";
import RecentUpdates from "./Connect/RecentUpdates";

export default function CESConnect() {
  return (
    <div className="ces-connect">

      <div className="ces-container">

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