// import "./CESConnect.css";

import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import {useNavigate} from "react-router-dom";
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
    value: "Pending",
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

  return (
    <div className="stats-grid">
      {cards.map((card) => (
        <div
          key={card.title}
          className="stat-card"
          onClick={() => {
            if (card.title === "Documents Available") {
              navigate("/projects");
            }
          }}
        >
          <div className="stat-icon">
            {card.icon}
          </div>

          <div className="stat-content">
            <div className="stat-title">
              {card.title}
            </div>

            <div className="stat-value">
              {card.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}





// export default function StatsCards() {
//   return (
//     <div className="stats-grid">
//       {cards.map((card) => (
//         <div
//           key={card.title}
//           className="stat-card"
//         >
//           <div className="stat-icon">
//             {card.icon}
//           </div>

//           <div className="stat-content">
//             <div className="stat-title">
//               {card.title}
//             </div>

//             <div className="stat-value">
//               {card.value}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
