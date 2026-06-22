// import { useNavigate } from "react-router-dom";
// import "./Projects.css";

// const projects = [
//     {
//         id: 1,
//         name: "MCC Control Panel",
//     },
//     {
//         id: 2,
//         name: "PCC Panel",
//     },
//     {
//         id: 3,
//         name: "APFC Panel",
//     },
// ];

// export default function Projects() {
//     const navigate = useNavigate();

//     return (
//         <div className="projects-page">

//             <h1>Project Documents</h1>

//             <div className="projects-grid">

//                 {projects.map((project) => (
//                     <div
//                         key={project.id}
//                         className="project-tile"
//                         onClick={() =>
//                             navigate(`/project/${project.id}`)
//                         }
//                     >
//                         {project.name}

//                         <p>
//                             View project documents and gallery
//                         </p>
//                     </div>
//                 ))}

//             </div>

//         </div>
//     );
// }


import { useNavigate } from "react-router-dom";
import "./Projects.css";
import { useState, useEffect } from "react";

export default function Projects() {

    const navigate = useNavigate();

    const [projects, setProjects] =
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
            .then((data) => {
                setProjects(data);
            })
            .catch((err) => {
                console.error(err);
            });

    }, []);

    return (

        <div className="projects-page">

            <h1>
                Project Documents
            </h1>

            <div className="projects-grid">

                {projects.map(
                    (project) => (

                        <div
                            key={project.id}
                            className="project-tile"
                            onClick={() =>
                                navigate(
                                    `/project/${project.id}`
                                )
                            }
                        >

                            {project.project_name}

                            <p>
                                View project documents
                                and FAT reports
                            </p>

                        </div>

                    )
                )}

            </div>

        </div>

    );

}