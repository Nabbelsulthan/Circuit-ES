


import "./ProjectDocuments.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProjectDocuments() {

  const { id } = useParams();

  console.log("Project ID:", id);

  const [documents, setDocuments] =
    useState([]);

  const [fatReports, setFatReports] =
    useState([]);

  const [project, setProject] =
    useState(null);



  const [gallery, setGallery] =
    useState([]);


  const [selectedImage,
    setSelectedImage] =
    useState(null);



  useEffect(() => {

    fetch(
      `http://localhost:5001/api/projects/${id}`
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(
          "PROJECT:",
          data
        );

        if (data) {
          setProject(
            JSON.parse(data)
          );
        }
      });

    fetch(
      `http://localhost:5001/api/documents/${id}`
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(
          "DOCUMENTS:",
          data
        );

        if (data) {
          setDocuments(
            JSON.parse(data)
          );
        }
      });

    fetch(
      `http://localhost:5001/api/fat-reports/${id}`
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(
          "FAT REPORTS:",
          data
        );

        if (data) {
          setFatReports(
            JSON.parse(data)
          );
        }
      });


    fetch(
      `http://localhost:5001/api/gallery/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
      });

  }, [id]);

  if (!project) {

    return (
      <div className="project-doc-page">
        <h1>Loading...</h1>
      </div>
    );

  }





  return (

    <div className="project-doc-page">

      <div className="project-header">
        <h1>
          {project.project_name}
        </h1>
      </div>

      <h2 className="section-title">
        Documents
      </h2>

      <div className="document-grid">

        {documents.length === 0 ? (

          <p>
            No Documents Available
          </p>

        ) : (

          documents.map((doc) => (

            <div
              key={doc.id}
              className="document-card"
            >

              <span className="document-name">
                {doc.file_name}
              </span>

              <a
                href={`http://localhost:5001/${doc.file_path}`}
                target="_blank"
                rel="noreferrer"
                className="download-btn"
              >
                Download
              </a>

            </div>

          ))

        )}

      </div>

      <h2 className="section-title">
        FAT Reports
      </h2>

      <div className="document-grid">

        {fatReports.length === 0 ? (

          <p>
            No FAT Reports Available
          </p>

        ) : (

          fatReports.map((report) => (

            <div
              key={report.id}
              className="document-card"
            >

              <span className="document-name">
                {report.report_name}
              </span>

              <a
                href={`http://localhost:5001/${report.file_path}`}
                target="_blank"
                rel="noreferrer"
                className="download-btn"
              >
                Download
              </a>

            </div>

          ))

        )}

      </div>

      <h2 className="section-title">
        Progress Gallery
      </h2>

      <div className="gallery-grid">

        {gallery.map(
          (image) => (

            <div
              key={image.id}
              className="gallery-item"
            >

              <img
                src={
                  `http://localhost:5001/${image.image_path}`
                }
                alt={
                  image.caption
                }
                className="gallery-image"
                onClick={() =>
                  setSelectedImage(
                    `http://localhost:5001/${image.image_path}`
                  )
                }
              />

              <div className="gallery-caption">
                {image.caption}
              </div>

            </div>

          )
        )}

      </div>


      {selectedImage && (

        <div
          className="image-modal"
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <img
            src={selectedImage}
            alt="Preview"
            className="image-preview"
          />

        </div>

      )}


    </div>

  );

}