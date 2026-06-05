// const stages = [
//   "Design",
//   "Fabrication",
//   "Assembly",
//   "Wiring",
//   "Testing",
//   "Dispatch",
//   "Delivered",
// ];

// export default function ProgressTimeline({ currentStage }) {
//   return (
//     <div className="timeline">
//       {stages.map((stage, index) => (
//         <div key={stage} className="timeline-item">

//           <div
//             className={`timeline-circle ${
//               index <= currentStage
//                 ? "timeline-active"
//                 : "timeline-inactive"
//             }`}
//           >
//             {index + 1}
//           </div>

//           <div className="timeline-label">
//             {stage}
//           </div>

//         </div>
//       ))}
//     </div>
//   );
// }



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

        const completed = index < currentStage;
        const active = index === currentStage;

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
                  ${
                    index < currentStage
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