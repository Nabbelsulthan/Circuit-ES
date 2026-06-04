import { Link } from "react-router-dom";
import "./CESConnectFloat.css";

export default function CESConnectFloat() {
  return (
    <Link
      to="/ces-connect"
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