

import "./CESConnect.css";

import StatsCards from "./Connect/StatsCards";
import ProjectCard from "./Connect/ProjectCard";
import RecentUpdates from "./Connect/RecentUpdates";
import CustomerBanner from "./Connect/CustomerBanner";
import ProjectDetails from "./Connect/ProjectDetails";
import CompletedProjectCard
  from "./Connect/CompletedProjectCard";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CESConnect() {

  const navigate = useNavigate();

  const [projects, setProjects] =
    useState([]);

  useEffect(() => {

    const customerId =
      localStorage.getItem(
        "customerId"
      );

    if (!customerId) {

      navigate(
        "/portal",
        {
          replace: true,
        }
      );

      return;

    }

    fetch(
      `http://localhost:5001/api/customers/${customerId}/projects`
    )
      .then((res) => res.json())
      .then((data) => {

        console.log(
          "Projects:",
          data
        );

        setProjects(data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, [navigate]);

  const customer =
    localStorage.getItem(
      "customerName"
    ) || "Customer";

  const activeProjects =
    projects.filter(
      (project) =>
        project.status !==
        "Delivered"
    );

  const completedProjects =
    projects.filter(
      (project) =>
        project.status ===
        "Delivered"
    );

  const handleLogout = () => {

    localStorage.removeItem(
      "customerId"
    );

    localStorage.removeItem(
      "customerName"
    );

    localStorage.removeItem(
      "isLoggedIn"
    );

    navigate(
      "/portal",
      {
        replace: true,
      }
    );

  };



  return (

    <div className="ces-connect">

      <div className="ces-container">

        <div className="dashboard-header">

          <div>

            <h2 className="welcome-title">
              Welcome, {customer}
            </h2>

            <p className="welcome-subtitle">
              Your centralized hub for project tracking, documentation, dispatch updates and progress monitoring.
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

          <div className="completed-projects-section">

            <h2 className="projects-section-title" >
              Active Projects
            </h2>

            {activeProjects.map(
              (project) => (

                <ProjectCard
                  key={project.id}
                  project={project}
                />

              )
            )}

            {completedProjects.length > 0 && (

              <>

                <br />

                <h2
                  className="projects-section-title"
                >
                  Completed Projects
                  (
                  {completedProjects.length}
                  )
                </h2>

                {completedProjects.map(
                  (project) => (

                    <CompletedProjectCard
                      key={project.id}
                      project={project}
                    />

                  )
                )}

              </>

            )}

          </div>

          <RecentUpdates />

        </div>

      </div>

    </div>

  );

}











