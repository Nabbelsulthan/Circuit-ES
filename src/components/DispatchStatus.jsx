


import "./DispatchStatus.css";
import { useEffect, useState } from "react";
import { API_URL } from "./Config/Config";


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
      `${API_URL}/api/customer-projects/customer/${customerId}`
    )
      .then((res) => res.json())
      .then((data) => {

        console.log("Projects:", data);

        setProjects(data);

      })
      .catch((error) => {

        console.error(error);

      });

  }, []);

  return (

    <div className="dispatch-container">

      <div className="dispatch-header">

        <div>

          <h1>
            Dispatch Status
          </h1>

          <p>
            Track transportation,
            shipment and delivery
            information for all your
            active projects.
          </p>

        </div>

      </div>

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












