import { useNavigate } from "react-router-dom";
import "./Projects.css";

const projects = [
    {
        id: 1,
        name: "MCC Control Panel",
    },
    {
        id: 2,
        name: "PCC Panel",
    },
    {
        id: 3,
        name: "APFC Panel",
    },
];

export default function Projects() {
    const navigate = useNavigate();

    return (
        <div className="projects-page">

            <h1>Project Documents</h1>

            <div className="projects-grid">

                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-tile"
                        onClick={() =>
                            navigate(`/project/${project.id}`)
                        }
                    >
                        {project.name}

                        <p>
                            View project documents and gallery
                        </p>
                    </div>
                ))}

            </div>

        </div>
    );
}