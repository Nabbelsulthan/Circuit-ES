

import "./CustomerBanner.css";
import { useEffect, useState } from "react";

export default function CustomerBanner() {

  const [stats, setStats] =
    useState({
      total: 0,
      completed: 0,
      ongoing: 0,
    });

  const customer =
    localStorage.getItem(
      "customerName"
    ) || "Customer";

  useEffect(() => {

    const customerId =
      localStorage.getItem(
        "customerId"
      );

    fetch(
      `http://localhost:5001/api/customers/${customerId}/projects`
    )
      .then((res) => res.json())
      .then((projects) => {

        const completed =
          projects.filter(
            (project) =>
              project.status ===
              "Delivered"
          ).length;

        setStats({
          total:
            projects.length,

          completed,

          ongoing:
            projects.length -
            completed,
        });

      });

  }, []);

  return (

    <div className="customer-banner">

      <div className="customer-left">

        <span className="customer-tag">
          ACTIVE CUSTOMER
        </span>

        <h1>
          Welcome Back,
          <span>
            {" "}
            {customer}
          </span>
        </h1>

        <p>
          Track project progress,
          review engineering
          documents, monitor
          testing activities and
          receive dispatch updates
          in real time.
        </p>

      </div>

      <div className="customer-right">

        <div className="banner-stat">
          <h2>
            {stats.total}
          </h2>
          <span>
            Projects
          </span>
        </div>

        <div className="banner-stat">
          <h2>
            {stats.completed}
          </h2>
          <span>
            Completed
          </span>
        </div>

        <div className="banner-stat">
          <h2>
            {stats.ongoing}
          </h2>
          <span>
            On Going
          </span>
        </div>

      </div>

    </div>

  );

}