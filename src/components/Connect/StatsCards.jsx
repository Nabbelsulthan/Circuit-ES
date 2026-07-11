
import "../CESConnect.css";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../Config/Config";


export default function StatsCards() {

  const navigate = useNavigate();

  const [stats, setStats] =
    useState({
      activeProject: "-",
      dispatchStatus: "-",
      totalProjects: 0,
      documents: 0,
    });


  useEffect(() => {

    const customerId =
      localStorage.getItem(
        "customerId"
      );

    fetch(
      `${API_URL}/api/customers/${customerId}/projects`
      
    )
      .then((res) => res.json())
      .then(async (projects) => {

        if (projects.length > 0) {

          const activeProjects =
            projects.filter(
              project =>
                project.status !==
                "Delivered"
            );

          const currentProject =
            activeProjects[0] ||
            projects[0];

          const completedProjects =
            projects.filter(
              project =>
                project.status ===
                "Delivered"
            ).length;

          let documentCount = 0;

          for (const project of projects) {

            const response =
              await fetch(
                `${API_URL}/api/documents/${project.id}`
              );

            const docs =
              await response.json();

            documentCount +=
              docs.length;

          }

          setStats({
            activeProject:
              currentProject.project_name,

            dispatchStatus:
              currentProject.dispatch_status,

            totalProjects:
              projects.length,

            completedProjects,

            documents:
              documentCount,
          });

        }

      });

  }, []);
  const cards = [
    {
      title: "Current Project",
      value:
        stats.activeProject,
      icon: <FolderIcon />,
    },
    {
      title: "Documents",
      value:
        stats.documents,
      icon: <DescriptionIcon />,
    },
    {
      title: "Dispatch Status",
      value:
        stats.dispatchStatus,
      icon: <LocalShippingIcon />,
    },
    {
      title: "Completed Projects",
      value:
        stats.completedProjects,
      icon: <FolderIcon />,
    },
  ];

  const handleCardClick =
    (title) => {

      switch (title) {

        case "Dispatch Status":
          navigate(
            "/dispatch-status"
          );
          break;

        case "Documents":
          navigate(
            "/projects"
          );
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
          onClick={() =>
            handleCardClick(
              card.title
            )
          }
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




