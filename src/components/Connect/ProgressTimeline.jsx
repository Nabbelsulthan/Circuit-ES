

import "./ProgressTimeline.css";


const stages = [
  "Design",
  "Fabrication",
  "Assembly",
  "Wiring",
  "Testing",
  "Dispatch",
  "Delivered",
];

export default function ProgressTimeline({
  currentStage = 4,
}) {
  return (
    <div className="progress-wrapper">

      {stages.map((stage, index) => {


        const projectCompleted =
          currentStage === stages.length - 1;

        const completed =
          projectCompleted
            ? index <= currentStage
            : index < currentStage;

        const active =
          !projectCompleted &&
          index === currentStage;


        return (
          <div
            key={stage}
            className="progress-item"
          >

            <div
              className={`progress-circle
                ${completed ? "completed" : ""}
                ${active ? "active" : ""}
              `}
            >
              {completed ? "✓" : ""}
            </div>

            <span className="progress-label">
              {stage}
            </span>

            {index !== stages.length - 1 && (
              <div
                className={`progress-line
                  ${index < currentStage
                    ? "line-completed"
                    : ""
                  }
                `}
              />
            )}

          </div>
        );
      })}

    </div>
  );
}