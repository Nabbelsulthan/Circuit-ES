

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
import { API_URL } from "./Config/Config";
import ConnectLoading from "./Connect/ConnectLoading";


export default function CESConnect() {

  const [loading, setLoading] =
    useState(true);


  const [showActive, setShowActive] =
    useState(true);

  const [showCompleted, setShowCompleted] =
    useState(false);

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
      `${API_URL}/api/customers/${customerId}/projects`
    )
      .then((res) => res.json())
      .then((data) => {

        console.log(
          "Projects:",
          data
        );

        setProjects(data);

        const activeCount = data.filter(
          project => project.status !== "Delivered"
        ).length;

        // Collapse for multiple active projects, expand for one or none
        setShowActive(activeCount <= 1);
        setLoading(false);

      })
      .catch((error) => {

        console.error(error);
        setLoading(false);

      });

  }, [navigate]);



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

  if (loading) {

    return <ConnectLoading />;

  }


  return (

    <div className="ces-connect">

      <div className="ces-container">

        <div className="dashboard-header">

          <div>

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

        

        <CustomerBanner projects={projects} />

        <ProjectDetails />

        <StatsCards projects={projects} />


        <div className="dashboard-grid">

          <div className="completed-projects-section">


            <div
              className="projects-section-header clickable"
              onClick={() =>
                setShowActive(!showActive)
              }
            >

              <div className="section-heading">

                <span className="section-icon active-icon">
                  ●
                </span>

                <h2>
                  Active Projects
                </h2>

              </div>

              <div className="section-right">

                <span className="section-count">

                  {activeProjects.length}

                </span>

                <span
                  className={`expand-icon ${showActive ? "expanded" : ""
                    }`}
                >
                  ▶
                </span>

              </div>

            </div>

            {showActive &&

              activeProjects.map((project) => (

                <ProjectCard
                  key={project.id}
                  project={project}
                />

              ))

            }


            {completedProjects.length > 0 && (

              <>

                <br />

                <div
                  className="projects-section-header clickable"
                  onClick={() =>
                    setShowCompleted(!showCompleted)
                  }
                >

                  <div className="section-heading">

                    <span className="section-icon completed-icon">
                      ✓
                    </span>

                    <h2>
                      Completed Projects
                    </h2>

                  </div>

                  <div className="section-right">

                    <span className="section-count completed-count">

                      {completedProjects.length}

                    </span>

                    <span
                      className={`expand-icon ${showCompleted ? "expanded" : ""
                        }`}
                    >
                      ▶
                    </span>



                  </div>

                </div>

                {showCompleted &&

                  completedProjects.map((project) => (

                    <CompletedProjectCard
                      key={project.id}
                      project={project}
                    />

                  ))

                }

              </>

            )}

          </div>

          <RecentUpdates projects={projects} />

        </div>

      </div>

    </div>

  );

}











