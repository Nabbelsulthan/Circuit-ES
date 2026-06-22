


import { useEffect, useState } from "react";

export default function RecentUpdates() {

  const [updates, setUpdates] =
    useState([]);

  useEffect(() => {

    const customerId =
      localStorage.getItem(
        "customerId"
      );

    fetch(
      `http://localhost:5001/api/customers/${customerId}/projects`
    )
      .then((res) => res.json())
      .then(async (projects) => {

        let allUpdates = [];

        for (const project of projects) {

          const response =
            await fetch(
              `http://localhost:5001/api/updates/${project.id}`
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

      <h3>
        Recent Updates
      </h3>

      {updates.length === 0 ? (

        <p>
          No Updates Available
        </p>

      ) : (

        updates.map(
          (update) => (

            <div
              key={update.id}
              className="update-item"
            >

              <h4 className="update-project">
                {update.project_name}
              </h4>

              <p className="update-text">
                {update.update_text}
              </p>
              <p>
                {new Date(
                  update.created_at
                ).toLocaleDateString()}
              </p>

            </div>

          )
        )

      )}

    </div>

  );

}