import { useState, useEffect } from "react";
import "./ProjectDetails.css";
import { API_URL } from "../Config/Config";


export default function ProjectDetails() {

  const [openProject, setOpenProject] =
    useState(null);

  const [projects, setProjects] =
    useState([]);

  useEffect(() => {

    const customerId =
      localStorage.getItem(
        "customerId"
      );

    fetch(
      `${API_URL}/api/customers/${customerId}/projects`
      
    )
      .then((res) => res.json())
      .then((data) => {

        const sortedProjects =
          [...data].sort((a, b) => {

            if (
              a.status === "Delivered" &&
              b.status !== "Delivered"
            ) {
              return 1;
            }

            if (
              a.status !== "Delivered" &&
              b.status === "Delivered"
            ) {
              return -1;
            }

            return 0;

          });

        setProjects(
          sortedProjects
        );

      });

  }, []);

  return (

    <div className="projects-wrapper">

      {projects.map((project, index) => (

        <div
          key={project.id}
          className="project-details-card"
        >

          <div
            className="project-header clickable"
            onClick={() =>
              setOpenProject(
                openProject === index
                  ? null
                  : index
              )
            }
          >

            <div>

              <span className="project-tag">

                {
                  project.status ===
                    "Delivered"
                    ? "COMPLETED PROJECT"
                    : "ACTIVE PROJECT"
                }

              </span>

              <h2>
                {project.project_name}
              </h2>

              <p className="project-subtitle">

                {project.panel_type || "Panel"}

                {" • "}

                {project.status}

              </p>

            </div>

            <div className="header-right">

              <div className="completion-badge">

                {
                  project.completion_percentage || 0
                }%

              </div>

              <span className="dropdown-icon">

                {
                  openProject === index
                    ? "▲"
                    : "▼"
                }

              </span>

            </div>

          </div>

          {openProject === index && (

            <div className="project-grid">

              <div className="detail-box">
                <label>
                  PO Number
                </label>

                <span>
                  {project.po_number || "-"}
                </span>
              </div>

              <div className="detail-box">
                <label>
                  Panel Type
                </label>

                <span>
                  {project.panel_type || "-"}
                </span>
              </div>

              <div className="detail-box">
                <label>
                  Target Date
                </label>

                <span>

                  {
                    project.expected_delivery
                      ? new Date(
                        project.expected_delivery
                      ).toLocaleDateString()
                      : "-"
                  }

                </span>
              </div>

              <div className="detail-box">
                <label>
                  Project Engineer
                </label>

                <span>
                  {
                    project.project_engineer || "-"
                  }
                </span>
              </div>

              <div className="detail-box">
                <label>
                  Current Stage
                </label>

                <span>
                  {project.status}
                </span>
              </div>

              <div className="detail-box">
                <label>
                  Dispatch Status
                </label>

                <span className="status-live">
                  {
                    project.dispatch_status || "-"
                  }
                </span>
              </div>

            </div>

          )}

        </div>

      ))}

    </div>

  );

}













