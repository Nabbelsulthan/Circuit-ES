import "./DispatchStatus.css";

const stages = [
  {
    name: "Order Confirmed",
    completed: true,
    date: "10 Jul 2026",
  },
  {
    name: "Design Approved",
    completed: true,
    date: "14 Jul 2026",
  },
  {
    name: "Manufacturing Completed",
    completed: true,
    date: "25 Jul 2026",
  },
  {
    name: "QA Testing Completed",
    completed: true,
    date: "28 Jul 2026",
  },
  {
    name: "Packing Completed",
    completed: true,
    date: "30 Jul 2026",
  },
  {
    name: "Dispatched",
    completed: false,
    date: "",
  },
  {
    name: "In Transit",
    completed: false,
    date: "",
  },
  {
    name: "Delivered",
    completed: false,
    date: "",
  },
];

export default function DispatchStatus() {
  return (
    <div className="dispatch-container">
      <div className="dispatch-header">
        <h2>Dispatch Tracking</h2>
      </div>

      <div className="dispatch-info">
        <div>
          <strong>Project:</strong> MCC Panel
        </div>

        <div>
          <strong>Customer:</strong> Bitsol Automation
        </div>

        <div>
          <strong>PO Number:</strong> CES-2026-001
        </div>

        <div>
          <strong>Current Status:</strong> Packing Completed
        </div>
      </div>

      <div className="timeline">
        {stages.map((stage, index) => (
          <div key={index} className="timeline-item">
            <div
              className={`timeline-dot ${
                stage.completed ? "completed" : ""
              }`}
            />

            <div className="timeline-content">
              <h4>{stage.name}</h4>

              {stage.date && <span>{stage.date}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}