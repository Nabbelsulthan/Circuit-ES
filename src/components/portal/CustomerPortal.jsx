import "./CustomerPortal.css";
import { useNavigate } from "react-router-dom";

export default function CustomerPortal() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary hardcoded login
    navigate("/ces-connect");
  };

  return (
    <div className="portal-page">

      <div className="portal-card">

        <div className="portal-header">

          <h1>CES Connect</h1>

          <p>
            Secure Customer Access Portal
          </p>

        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">

            <label>Company ID</label>

            <input
              type="text"
              placeholder="TVS001"
            />

          </div>

          <div className="form-group">

            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
            />

          </div>

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
            />

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}