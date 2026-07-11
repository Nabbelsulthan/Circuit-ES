

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
    <>

      {/* Desktop Timeline */}
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



      {/* Mobile Cards */}

      {/* <div className="mobile-progress">

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
              className={`mobile-stage
              ${completed ? "completed" : ""}
              ${active ? "active" : ""}
            `}
            >

              <div className="mobile-stage-icon">

                {completed
                  ? "✓"
                  : active
                    ? "●"
                    : "○"}

              </div>

              <div className="mobile-stage-content">

                <h4>{stage}</h4>

                <span>

                  {completed
                    ? "Completed"
                    : active
                      ? "In Progress"
                      : "Pending"}

                </span>

              </div>

            </div>

          );

        })}

      </div> */}

      {/* Mobile Progress */}

<div className="mobile-progress">

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
        className="mobile-progress-item"
      >

        <div
          className={`mobile-progress-icon
            ${completed ? "completed" : ""}
            ${active ? "active" : ""}
          `}
        >

          {completed
            ? "✓"
            : active
            ? "●"
            : "○"}

        </div>

        <div className="mobile-progress-content">

          <span className="mobile-stage-name">
            {stage}
          </span>

          <span
            className={`mobile-stage-status
              ${completed ? "completed" : ""}
              ${active ? "active" : ""}
            `}
          >

            {completed
              ? "Completed"
              : active
              ? "In Progress"
              : "Pending"}

          </span>

        </div>

      </div>

    );

  })}

</div>






    </>

  );
}