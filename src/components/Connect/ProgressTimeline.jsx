const stages = [
  "Design",
  "Fabrication",
  "Assembly",
  "Wiring",
  "Testing",
  "Dispatch",
  "Delivered",
];

export default function ProgressTimeline({ currentStage }) {
  return (
    <div className="timeline">
      {stages.map((stage, index) => (
        <div key={stage} className="timeline-item">

          <div
            className={`timeline-circle ${
              index <= currentStage
                ? "timeline-active"
                : "timeline-inactive"
            }`}
          >
            {index + 1}
          </div>

          <div className="timeline-label">
            {stage}
          </div>

        </div>
      ))}
    </div>
  );
}