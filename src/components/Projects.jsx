
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import { useState, useEffect } from "react";
import { API_URL } from "./Config/Config";
import ConnectLoading from "./Connect/ConnectLoading";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";

export default function Projects() {

    const navigate = useNavigate();

    const [projects, setProjects] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const customerId =
            localStorage.getItem("customerId");

        fetch(
            `${API_URL}/api/customers/${customerId}/projects`
        )
            .then((res) => res.json())
            .then((data) => {

                setProjects(data);

                setLoading(false);

            })
            .catch((err) => {

                console.error(err);

                setLoading(false);

            });

    }, []);

    if (loading) {

        return <ConnectLoading />;

    }

    return (

        <div className="projects-page">

            <div className="projects-header">

                <div className="projects-header-content">

                    <span className="projects-tag">
                        DOCUMENT LIBRARY
                    </span>

                    <h1>
                        Project Library
                    </h1>

                    <p>
                        Browse engineering drawings, FAT reports,
                        technical documents and project progress
                        from one centralized location.
                    </p>

                </div>

          

                <div className="projects-summary">

                    <FolderCopyRoundedIcon
                        sx={{
                            fontSize: 42,
                            marginBottom: "10px",
                            opacity: .9
                        }}
                    />

                    <span className="projects-count">
                        {projects.length}
                    </span>

                    <small>Total Projects</small>

                </div>

            </div>
            {projects.length === 0 ? (

                <div className="empty-projects">

                    <div className="empty-icon">
                        📂
                    </div>

                    <h2>
                        No Projects Available
                    </h2>

                    <p>

                        Your assigned projects will
                        appear here once they are
                        created.

                    </p>

                </div>

            ) : (

                <div className="projects-grid">

                    {projects.map((project) => (

                        <div
                            key={project.id}
                            className="project-card"
                        >
                            <div className="project-top">

                                <div className="folder-icon">

                                    <FolderOpenRoundedIcon
                                        className="folder-mui-icon"
                                    />

                                </div>

                                <span
                                    className={
                                        project.status === "Delivered"
                                            ? "status-chip completed"
                                            : "status-chip active"
                                    }
                                >

                                    {project.status === "Delivered" ? (

                                        <>
                                            <AssignmentTurnedInRoundedIcon
                                                fontSize="small"
                                            />
                                            Delivered
                                        </>

                                    ) : (

                                        <>
                                            <PendingActionsRoundedIcon
                                                fontSize="small"
                                            />
                                            {project.status}
                                        </>

                                    )}

                                </span>

                            </div>
                            <h2>

                                {project.project_name}

                            </h2>

                            <div className="project-info">

                                <div>

                                    <span>
                                        Panel Type
                                    </span>

                                    <strong>

                                        {project.panel_type || "-"}

                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        Progress
                                    </span>

                                    <strong>

                                        {project.completion_percentage || 0}%

                                    </strong>

                                </div>

                            </div>

                            <button
                                className="open-btn"
                                onClick={() =>
                                    navigate(`/project/${project.id}`)
                                }
                            >

                                Open Project

                                <ArrowForwardRoundedIcon
                                    fontSize="small"
                                />

                            </button>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}