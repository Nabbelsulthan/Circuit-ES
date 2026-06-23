


import "./DispatchStatus.css";
import { useEffect, useState } from "react";

export default function DispatchStatus() {

  const [projects, setProjects] =
    useState([]);

  const [selectedProject,
    setSelectedProject] =
    useState(null);

  useEffect(() => {

    const customerId =
      localStorage.getItem(
        "customerId"
      );

    fetch(
      `http://localhost:5001/api/customers/${customerId}/projects`
    )
      .then((res) => res.json())
      .then((data) => {

        setProjects(data);

      });

  }, []);

  return (

    <div className="dispatch-container">

      <h2>
        Select Project
      </h2>

      {!selectedProject ? (

        <div className="project-list">

          {projects.map(
            (project) => (

              <div
                key={project.id}
                className="dispatch-project-card"
                onClick={() =>
                  setSelectedProject(
                    project
                  )
                }
              >

                <h3>
                  {project.project_name}
                </h3>
                <span className="status-badge">
                  {project.dispatch_status}
                </span>
{/* 
                <p>
                  {project.dispatch_status}
                </p> */}

              </div>

            )
          )}

        </div>

      ) : (

        <div className="dispatch-details">

          <button
            className="back-btn"
            onClick={() =>
              setSelectedProject(
                null
              )
            }
          >
            ← Back
          </button>

          <h2>
            {
              selectedProject.project_name
            }
          </h2>

          <div className="dispatch-info">

            <div>
              <strong>
                PO Number:
              </strong>
              {" "}
              {
                selectedProject.po_number
              }
            </div>

            <div>
              <strong>
                Dispatch Status:
              </strong>
              {" "}
              {
                selectedProject.dispatch_status
              }
            </div>

            <div>
              <strong>
                Transporter:
              </strong>
              {" "}
              {
                selectedProject.transporter ||
                "-"
              }
            </div>

            <div>
              <strong>
                LR Number:
              </strong>
              {" "}
              {
                selectedProject.lr_number ||
                "-"
              }
            </div>

            <div>
              <strong>
                Vehicle Number:
              </strong>
              {" "}
              {
                selectedProject.vehicle_number ||
                "-"
              }
            </div>

            <div>
              <strong>
                Dispatch Date:
              </strong>
              {" "}
              {
                selectedProject.dispatch_date
                  ? new Date(
                    selectedProject.dispatch_date
                  ).toLocaleDateString()
                  : "-"
              }
            </div>

            <div>
              <strong>
                Delivery Date:
              </strong>
              {" "}
              {
                selectedProject.delivery_date
                  ? new Date(
                    selectedProject.delivery_date
                  ).toLocaleDateString()
                  : "Pending"
              }
            </div>

          </div>

        </div>

      )}

    </div>

  );

}












