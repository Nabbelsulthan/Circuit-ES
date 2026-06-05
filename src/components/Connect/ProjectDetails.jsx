import "./ProjectDetails.css";

export default function ProjectDetails() {
  return (
    <div className="project-details-card">

      <div className="project-header">

        <div>
          <span className="project-tag">
            ACTIVE PROJECT
          </span>

          <h2>
            Bio Gas Panel
          </h2>

          <p>
            Bitsol Automation
          </p>
        </div>

        <div className="completion-badge">
          82%
        </div>

      </div>

      <div className="project-grid">

        <div className="detail-box">
          <label>PO Number</label>
          <span>CES-2025-001</span>
        </div>

        <div className="detail-box">
          <label>Panel Type</label>
          <span>MCC Panel</span>
        </div>

        <div className="detail-box">
          <label>Target Date</label>
          <span>15 Aug 2025</span>
        </div>

        <div className="detail-box">
          <label>Project Engineer</label>
          <span>Nabbel</span>
        </div>

        <div className="detail-box">
          <label>Current Stage</label>
          <span>Testing</span>
        </div>

        <div className="detail-box">
          <label>Status</label>
          <span className="status-live">
            In Progress
          </span>
        </div>

      </div>

    </div>
  );
}