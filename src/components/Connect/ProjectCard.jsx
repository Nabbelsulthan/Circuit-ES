

import ProgressTimeline from "./ProgressTimeline";
import "./ProjectCard.css";

const stageMap = {
  Design: 0,
  Fabrication: 1,
  Assembly: 2,
  Wiring: 3,
  Testing: 4,
  Dispatch: 5,
  Delivered: 6,
};

export default function ProjectCard({
  project,
}) {

  const currentStage =
    stageMap[
    project.status
    ] ?? 0;

  return (

    <div className="project-card">

      <div className="project-header">

        <div>

          <div className="project-title">
            {project.project_name}
          </div>

          <div className="project-company">
            {
              localStorage.getItem(
                "customerName"
              )
            }
          </div>

        </div>

        <div className="progress-pill">
          {project.status}
        </div>

      </div>

      <div
        style={{
          marginTop: "12px",
          marginBottom: "16px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        <div className="project-meta">

          <div className="meta-item">
            <span>PO Number</span>
            <strong>{project.po_number}</strong>
          </div>

          <div className="meta-item">
            <span>Project Value</span>
            <strong>
              ₹{project.project_value}
            </strong>
          </div>


        </div>
      </div>

      <ProgressTimeline
        currentStage={currentStage}
      />

    </div>

  );

}
