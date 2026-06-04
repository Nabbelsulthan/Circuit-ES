import { Link, useLocation } from "react-router-dom";
import "./CESConnectFloat.css";

export default function CESConnectFloat() {
  const location = useLocation();

  const hiddenRoutes = [
    "/portal",
    "/ces-connect"
  ];

  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <Link
      to="/portal"
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