


import "./ProjectDocuments.css";
import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "MCC Control Panel",
    documents: [
      "GA Drawing.pdf",
      "SLD Diagram.pdf",
      "FAT Report.pdf",
    ],
    photos: [
      {
        image: "https://picsum.photos/500/300?1",
        caption: "Assembly Completed",
      },
      {
        image: "https://picsum.photos/500/300?2",
        caption: "Wiring Stage",
      },
      {
        image: "https://picsum.photos/500/300?3",
        caption: "Testing Phase",
      },
    ],
  },

  {
    id: 2,
    name: "PCC Panel",
    documents: [
      "PCC Drawing.pdf",
      "Test Report.pdf",
    ],
    photos: [
      {
        image: "https://picsum.photos/500/300?4",
        caption: "Fabrication",
      },
      {
        image: "https://picsum.photos/500/300?5",
        caption: "Assembly",
      },
    ],
  },

  {
    id: 3,
    name: "APFC Panel",
    documents: [
      "APFC Layout.pdf",
      "Inspection Report.pdf",
    ],
    photos: [
      {
        image: "https://picsum.photos/500/300?6",
        caption: "Testing",
      },
    ],
  },
];

export default function ProjectDocuments() {
  const { id } = useParams();

  const project = projects.find(
    (p) => p.id === Number(id)
  );

  if (!project) {
    return (
      <div className="project-doc-page">
        <h1>Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="project-doc-page">

      <div className="project-header">
        <h1>{project.name}</h1>
      </div>

      <h2 className="section-title">
        Documents
      </h2>

      <div className="document-grid">

        {project.documents.map((doc) => (
          <div
            key={doc}
            className="document-card"
          >
            <span className="document-name">
              {doc}
            </span>

            <button className="download-btn">
              Download
            </button>
          </div>
        ))}

      </div>

      <h2 className="section-title">
        Progress Gallery
      </h2>

      <div className="gallery-grid">

        {project.photos.map((photo, index) => (
          <div
            key={index}
            className="gallery-item"
          >
            <img
              src={photo.image}
              alt={photo.caption}
            />

            <div className="gallery-caption">
              {photo.caption}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}