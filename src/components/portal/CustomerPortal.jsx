


import "./CustomerPortal.css";
import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";



export default function CustomerPortal() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const [error, setError] = useState("");
  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      navigate("/ces-connect");
    }
  }, [navigate]);


  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   if (!companyId || !username || !password) {
  //     setError("Please fill all fields.");
  //     return;
  //   }

  //   if (
  //     companyId === "BITSOL001" &&
  //     username === "bitsol" &&
  //     password === "bitsol123"
  //   ) {
  //     localStorage.setItem("customer", "Bitsol");
  //     localStorage.setItem("isLoggedIn", "true");

  //     navigate("/ces-connect");
  //   } else {
  //     setError("Invalid credentials.");
  //   }
  // };




  const handleLogin =
  async (e) => {

    e.preventDefault();

    if (
      !username ||
      !password
    ) {

      setError(
        "Please fill all fields."
      );

      return;
    }

    try {

      const response =
        await fetch(
          "http://localhost:5001/api/customer-auth/login",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                username,
                password,
              }),
          }
        );

      const data =
        await response.json();

      if (
        response.ok
      ) {

        localStorage.setItem(
          "customerId",
          data.customerId
        );

        localStorage.setItem(
          "customerName",
          data.companyName
        );

        localStorage.setItem(
          "isLoggedIn",
          "true"
        );

        navigate(
          "/ces-connect"
        );

      } else {

        setError(
          data.message
        );

      }

    } catch (error) {

      console.error(error);

      setError(
        "Server Error"
      );

    }

  };

  return (
    <div className="portal-page">
      <div className="portal-overlay"></div>

      <div className="portal-container">

        <div className="portal-info">



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