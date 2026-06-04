// import "./CESConnect.css";

const cards = [
  { title: "Active Projects", value: 3 },
  { title: "Documents", value: 14 },
  { title: "Dispatches", value: 2 },
  { title: "Support Tickets", value: 0 },
];

export default function StatsCards() {
  return (
    <div className="stats-grid">
      {cards.map((card) => (
        <div key={card.title} className="stat-card">
          <div className="stat-title">{card.title}</div>
          <div className="stat-value">{card.value}</div>
        </div>
      ))}
    </div>
  );
}