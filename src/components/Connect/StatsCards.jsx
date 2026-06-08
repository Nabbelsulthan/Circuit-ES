

import "../CESConnect.css";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Active Project",
    value: "MCC Panel",
    icon: <FolderIcon />,
  },
  {
    title: "Documents Available",
    value: 14,
    icon: <DescriptionIcon />,
  },
  {
    title: "Dispatch Status",
    value: "Packing Completed",
    icon: <LocalShippingIcon />,
  },
  {
    title: "Recent Updates",
    value: 2,
    icon: <NotificationsActiveIcon />,
  },
];

export default function StatsCards() {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    switch (title) {
      case "Documents Available":
        navigate("/projects");
        break;

      case "Dispatch Status":
        navigate("/dispatch-status");
        break;

      default:
        break;
    }
  };

  return (
    <div className="stats-grid">
      {cards.map((card) => (
        <div
          key={card.title}
          className="stat-card"
          onClick={() => handleCardClick(card.title)}
        >
          <div className="stat-icon">{card.icon}</div>

          <div className="stat-content">
            <div className="stat-title">{card.title}</div>

            <div className="stat-value">{card.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}