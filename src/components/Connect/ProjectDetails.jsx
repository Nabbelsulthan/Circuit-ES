// import "./ProjectDetails.css";

// export default function ProjectDetails() {
//   return (
//     <div className="project-details-card">

//       <div className="project-header">

//         <div>
//           <span className="project-tag">
//             ACTIVE PROJECT
//           </span>

//           <h2>
//             Bio Gas Panel
//           </h2>

//           <p>
//             Bitsol Automation
//           </p>
//         </div>

//         <div className="completion-badge">
//           82%
//         </div>

//       </div>

//       <div className="project-grid">

//         <div className="detail-box">
//           <label>PO Number</label>
//           <span>CES-2025-001</span>
//         </div>

//         <div className="detail-box">
//           <label>Panel Type</label>
//           <span>MCC Panel</span>
//         </div>

//         <div className="detail-box">
//           <label>Target Date</label>
//           <span>15 Aug 2025</span>
//         </div>

//         <div className="detail-box">
//           <label>Project Engineer</label>
//           <span>Nabbel</span>
//         </div>

//         <div className="detail-box">
//           <label>Current Stage</label>
//           <span>Testing</span>
//         </div>

//         <div className="detail-box">
//           <label>Status</label>
//           <span className="status-live">
//             In Progress
//           </span>
//         </div>

//       </div>

//     </div>
//   );
// }



import { useState } from "react";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const [openProject, setOpenProject] = useState(0);

  const projects = [
    {
      tag: "ACTIVE PROJECT",
      title: "Bio Gas Panel",
      company: "Bitsol Automation",
      completion: "82%",
      poNumber: "CES-2025-001",
      panelType: "MCC Panel",
      targetDate: "15 Aug 2025",
      engineer: "Nabbel",
      stage: "Testing",
      status: "In Progress",
    },
    // {
    //   tag: "NEW PROJECT",
    //   title: "Water Treatment Panel",
    //   company: "Bitsol Automation",
    //   completion: "45%",
    //   poNumber: "CES-2025-002",
    //   panelType: "PLC Panel",
    //   targetDate: "30 Sep 2025",
    //   engineer: "Nabbel",
    //   stage: "Design",
    //   status: "Planning",
    // },
  ];

  return (
    <div className="projects-wrapper">
      {projects.map((project, index) => (
        <div key={index} className="project-details-card">
          <div
            className="project-header clickable"
            onClick={() =>
              setOpenProject(openProject === index ? null : index)
            }
          >
            <div>
              <span className="project-tag">{project.tag}</span>

              <h2>{project.title}</h2>

              <p>{project.company}</p>
            </div>

            <div className="header-right">
              <div className="completion-badge">
                {project.completion}
              </div>

              <span className="dropdown-icon">
                {openProject === index ? "▲" : "▼"}
              </span>
            </div>
          </div>

          {openProject === index && (
            <div className="project-grid">
              <div className="detail-box">
                <label>PO Number</label>
                <span>{project.poNumber}</span>
              </div>

              <div className="detail-box">
                <label>Panel Type</label>
                <span>{project.panelType}</span>
              </div>

              <div className="detail-box">
                <label>Target Date</label>
                <span>{project.targetDate}</span>
              </div>

              <div className="detail-box">
                <label>Project Engineer</label>
                <span>{project.engineer}</span>
              </div>

              <div className="detail-box">
                <label>Current Stage</label>
                <span>{project.stage}</span>
              </div>

              <div className="detail-box">
                <label>Status</label>
                <span className="status-live">
                  {project.status}
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}