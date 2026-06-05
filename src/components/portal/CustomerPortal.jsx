


import "./CustomerPortal.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/circuitES1-logo.png";
// import logo from "../../assets/CircuitsES connect logo.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";




export default function CustomerPortal() {
  const navigate = useNavigate();

  const [companyId, setCompanyId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const [error, setError] = useState("");


  
  const handleLogin = (e) => {
    e.preventDefault();

    if (!companyId || !username || !password) {
      setError("Please fill all fields.");
      return;
    }

    if (
      companyId === "BITSOL001" &&
      username === "bitsol" &&
      password === "bitsol123"
    ) {
      localStorage.setItem("customer", "Bitsol");

      navigate("/ces-connect");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="portal-page">
      <div className="portal-overlay"></div>

      <div className="portal-container">

        <div className="portal-info">

          <img
            src={Logo}
            alt="Circuits Energy System"
            className="portal-logo"
          />

          <h1>CES Connect</h1>

          <h2>Customer Portal</h2>

          <p>
            Welcome to the secure customer portal for
            monitoring project progress, drawings,
            FAT reports and dispatch updates.
          </p>

          <div className="portal-features">
            <div>✓ Project Tracking</div>
            <div>✓ FAT Reports</div>
            <div>✓ Drawings & Documents</div>
            <div>✓ Dispatch Updates</div>
          </div>

        </div>

        <div className="portal-card">

          {/* <h3>Customer Login</h3>

          <p>
            Sign in to access your projects.
          </p> */}

          <div className="secure-badge">
            SECURE ACCESS
          </div>

          <h3 className="login-title">
            <LockOutlinedIcon />
            Customer Login
          </h3>

          <p>
            Sign in to access your projects.
          </p>

          <form onSubmit={handleLogin}>

            <div className="form-group">
              <label>Company ID</label>
              <input
                type="text"
                placeholder="Enter your company ID"
                value={companyId}
                onChange={(e) =>
                  setCompanyId(e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
              />
            </div>

            {/* <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
            </div> */}





            <div className="form-group">
              <label>Password</label>

              <div className="password-wrapper">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </button>

              </div>

            </div>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="login-btn"
            >
              Login to CES Connect
            </button>

          </form>

          <div className="portal-help">
            Need Access?
            <a href="/contact">
              Contact Circuits ES
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}