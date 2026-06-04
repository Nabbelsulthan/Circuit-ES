import ProgressTimeline from "./ProgressTimeline";

export default function ProjectCard() {
  return (
    <div className="project-card">

      <div className="project-header">

        <div>
          <div className="project-title">
            Bio-Gas
          </div>

          <div className="project-company">
            Bitsol Automation
          </div>
        </div>

        <div className="progress-pill">
          82%
        </div>

      </div>

      <ProgressTimeline currentStage={4} />

    </div>
  );
}