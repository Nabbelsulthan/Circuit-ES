


import { useEffect, useState } from "react";
import { API_URL } from "../Config/Config";
;

export default function RecentUpdates() {

  const [updates, setUpdates] =
    useState([]);

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

        let allUpdates = [];

        for (const project of projects) {

          const response =
            await fetch(
              `${API_URL}/api/updates/${project.id}`
            );

          const data =
            await response.json();

          allUpdates = [
            ...allUpdates,
            ...data.map(
              (item) => ({
                ...item,
                project_name:
                  project.project_name,
              })
            ),
          ];

        }

        allUpdates.sort(
          (a, b) =>
            new Date(
              b.created_at
            ) -
            new Date(
              a.created_at
            )
        );

        setUpdates(
          allUpdates.slice(0, 10)
        );

      });

  }, []);

  return (

  <div className="updates-card">

    <div className="updates-header">

      <h3>
        Recent Activity
      </h3>

      <span className="updates-count">
        {updates.length}
      </span>

    </div>

    {updates.length === 0 ? (

      <p className="no-updates">
        No Updates Available
      </p>

    ) : (

      updates.map((update) => (

        <div
          key={update.id}
          className="timeline-item"
        >

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <h4 className="update-project">
              {update.project_name}
            </h4>

            <p className="update-text">
              {update.update_text}
            </p>

            <span className="update-date">
              🕒 {new Date(update.created_at).toLocaleDateString()}
            </span>

          </div>

        </div>

      ))

    )}

  </div>

);





}