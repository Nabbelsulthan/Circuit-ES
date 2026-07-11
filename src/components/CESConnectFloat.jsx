


import { Link, useLocation } from "react-router-dom";
import "./CESConnectFloat.css";

export default function CESConnectFloat() {
  const location = useLocation();

  const portalPages = [
    "/portal",
    "/ces-connect",
    "/projects",
    "/project",
    "/dispatch-status",
  ];

  const isPortal =
    portalPages.some((page) =>
      location.pathname.startsWith(page)
    );

  if (isPortal) {
    return null;
  }

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  return (
    <Link
      to={
        isLoggedIn
          ? "/ces-connect"
          : "/portal"
      }
      className="ces-connect-float"
    >
      <div className="portal-icon">
        ⚡
      </div>

      <div className="ces-connect-text">
        <span className="portal-label">
          CUSTOMER PORTAL
        </span>

        <span className="portal-name">
          CES Connect
        </span>
      </div>
    </Link>
  );
}