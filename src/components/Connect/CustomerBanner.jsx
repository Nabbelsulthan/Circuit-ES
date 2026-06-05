import "./CustomerBanner.css";

export default function CustomerBanner() {
  const customer =
    localStorage.getItem("customer") || "Bitsol";

  return (
    <div className="customer-banner">

      <div className="customer-left">

        <span className="customer-tag">
          ACTIVE CUSTOMER
        </span>

        <h1>
          Welcome Back,
          <span> {customer}</span>
        </h1>

        <p>
          Track project progress, review engineering
          documents, monitor testing activities and
          receive dispatch updates in real time.
        </p>

      </div>

      <div className="customer-right">

        <div className="banner-stat">
          <h2>3</h2>
          <span>Projects</span>
        </div>

        <div className="banner-stat">
          <h2>2</h2>
          <span>Completed</span>
        </div>

        <div className="banner-stat">
          <h2>1</h2>
          <span>On Going</span>
        </div>

      </div>

    </div>
  );
}