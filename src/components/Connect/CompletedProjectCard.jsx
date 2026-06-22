export default function CompletedProjectCard({
  project,
}) {

  return (

    <div className="completed-project-card">

      <div className="completed-icon">
        ✓
      </div>

      <div className="completed-content">

        <h4>
          {project.project_name}
        </h4>

        <p>
          PO:
          {" "}
          {project.po_number}
        </p>

      </div>

      <div className="completed-status">
        Delivered
      </div>

    </div>

  );

}